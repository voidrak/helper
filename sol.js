(() => {
  const claim = () => {
    const button = document.querySelector("button.btn-claim.btn-warning");
    if (button && !button.disabled) {
      button.click();
      console.log("✅ Claimed at:", new Date().toLocaleTimeString());
    }
    requestAnimationFrame(claim);
  };
  claim();
})();
