import { render, screen } from "@testing-library/react";

import { foo, Header } from "@/widgets/Header";

jest.mock("next/navigation", () => ({
      useRouter() {
            return {
                  prefetch: () => null,
            };
      },
}));

it("hasButton", () => {
      render(<Header />);
      const btn = screen.getByText("Sign In");
      expect(btn).toBeInTheDocument();
});

test("some function", () => {
      expect(foo()).toBe(true);
});
