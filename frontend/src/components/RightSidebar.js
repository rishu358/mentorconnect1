import RightSidebar from '../../components/RightSidebar'; // Import the RightSidebar component
// ...
  return (
    <div className="flex flex-col lg:flex-row w-full h-full">
      <div className="flex-1"> {/* This div holds the main dashboard sections */}
        {/* ... dashboard content ... */}
      </div>

      {/* Right Sidebar (Calendar & Events) - Only on Dashboard Page */}
      <RightSidebar />
    </div>
  );

export { RightSidebar };
