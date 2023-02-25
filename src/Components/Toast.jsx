import React from "react";

function Toast({ title, message }) {
  return (
    <div class="toast toast-center">
      <div class="alert alert-success">
        <div>
          <span>Message sent successfully.</span>
        </div>
      </div>
    </div>
  );
}

export default Toast;
