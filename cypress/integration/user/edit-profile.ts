describe("Edit Profile", () => {
  const user = cy;

  beforeEach(() => {
    user.login("kimhscom@kakao.com", "12345678");
  });

  it("can go to /edit-profile using the header", () => {
    user.get('a[href="/edit-profile"]').click();
    user.wait(2000);
    user.title().should("eq", "Edit Profile | Nuber Eats");
  });

  it("can change email", () => {
    user.visit("/edit-profile");
    user.findByPlaceholderText(/email/i).clear().type("new@email.com");
    user.findByRole("button").click();
  });
});
