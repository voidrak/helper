(function autoClickClaim() {
  const button = document.querySelector("button.btn-claim.btn-warning");
  if (button && !button.disabled) {
    button.click();
    console.log("✅ Claim button clicked!");
  }
  setTimeout(autoClickClaim, 0); // loop again immediately
})();
