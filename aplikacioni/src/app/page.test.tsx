import { renderToStaticMarkup } from "react-dom/server";
import { beforeEach, describe, expect, test, vi } from "vitest";
import type { Udhetim } from "@/lib/udhetimet";

const { lexoUdhetimetMock, getServerSessionMock } = vi.hoisted(() => ({
  lexoUdhetimetMock: vi.fn(),
  getServerSessionMock: vi.fn(),
}));

vi.mock("@/lib/udhetimet", () => ({
  lexoUdhetimet: lexoUdhetimetMock,
}));
vi.mock("next-auth", () => ({
  getServerSession: getServerSessionMock,
}));

import Home from "./page";

const udhetimet: Udhetim[] = [{
  id: "2",
  nisja: "Fushë Kosovë",
  destinacioni: "AAB",
  ora: "08:15",
  vendtakimi: "Te stacioni kryesor",
  vende: 1,
}];

describe("Lista e udhëtimeve", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    getServerSessionMock.mockResolvedValue(null);
  });

  test("paraqet udhëtimet nga databaza", async () => {
    lexoUdhetimetMock.mockResolvedValue(udhetimet);

    const html = renderToStaticMarkup(
      await Home(),
    );

    expect(html).toContain("Fushë Kosovë – AAB");
    expect(html).toContain("08:15");
  });

  test("paraqet listën bosh", async () => {
    lexoUdhetimetMock.mockResolvedValue([]);

    const html = renderToStaticMarkup(
      await Home(),
    );

    expect(html).toContain("Nuk ka udhetime per momentin.");
    expect(html).toContain("Rifresko listen");
  });

  test("paraqet mesazh rikuperimi kur databaza nuk arrihet", async () => {
    lexoUdhetimetMock.mockRejectedValue(new Error("connection failed"));

    const html = renderToStaticMarkup(await Home());

    expect(html).toContain("Nuk u lidhem me databazen. Provo perseri.");
  });
});
