document.addEventListener('DOMContentLoaded', function () {
  let clickCount = 0;
  const maxClicks = 10; // Optional: Stop after 10 clicks

  function autoClickClaim() {
    const button = document.querySelector("button.btn-claim.btn-warning");
    if (button && !button.disabled) {
      button.click();
      console.log("✅ Claim button clicked!");
      clickCount++;
      if (clickCount >= maxClicks) {
        clearInterval(intervalId);
        console.log("Auto-clicker stopped after reaching maximum clicks.");
      }
    } else {
      console.log("Button not found or disabled. Continuing to check...");
    }
  }

  const intervalId = setInterval(autoClickClaim, 100);
});