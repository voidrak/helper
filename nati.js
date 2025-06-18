(function autoClickClaim() {
  const button = document.querySelector("button.btn-claim.btn-warning");
  if (button && !button.disabled) {
    button.click();
  }
  requestAnimationFrame(autoClickClaim); // Loop on next frame
})();
