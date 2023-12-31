import React, { useEffect } from 'react';

function Chat() {
  useEffect(() => {
    // Retrieve the stored chat session ID from localStorage
    const storedChatSessionId = localStorage.getItem('chatSessionId');

    // Generate a new session ID if not present
    const chatSessionId = storedChatSessionId || Math.random().toString(36).substring(7);

    var kommunicateSettings = {
      "appId": "7fccdfb7d8b2510fa6d40a46450588be",
      "popupWidget": true,
      "automaticChatOpenOnNavigation": true,
      "onInit": () => {
        // Store the chat session ID in localStorage
        localStorage.setItem('chatSessionId', chatSessionId);
      }
    };

    var s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
    var h = document.getElementsByTagName("head")[0];
    h.appendChild(s);
    window.kommunicate = window.kommunicate || {};
    window.kommunicate._globals = kommunicateSettings;

    // Cleanup function
    return () => {
      // Perform cleanup actions specific to Kommunicate
      if (window.kommunicate) {
        if (window.kommunicate.closeChat) {
          window.kommunicate.closeChat();
        }
        if (window.kommunicate._globals && window.kommunicate._globals.onInit) {
          // Clear chat data when the component is unmounted
          window.kommunicate._globals.onInit();
        }
      }

      // Perform additional cleanup actions here
    };
  }, []); // Empty dependency array means this effect runs once on mount

  useEffect(() => {
    // Set up cleanup on page reload
    const handleBeforeUnload = () => {
      // Close the chat on page reload
      if (window.kommunicate && window.kommunicate.closeChat) {
        window.kommunicate.closeChat();
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Cleanup function on component unmount
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return <div></div>;
}

export default Chat;