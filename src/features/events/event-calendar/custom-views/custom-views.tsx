import { sliceEvents, createPlugin } from "@fullcalendar/core";

function CustomView(props: any) {
  const dateProfile = props?.dateProfile;

  if (!dateProfile || !dateProfile.currentRange) {
    return <div>Loading...</div>; // or some fallback UI
  }
  let segs = sliceEvents?.(props, true); // allDay=true

  return (
    <>
      <div className="view-title">
        {props?.dateProfile?.currentRange?.start?.toUTCString()}
      </div>
      <div className="view-events">{segs?.length} events</div>
    </>
  );
}

export const customPlugin = createPlugin({
  views: {
    custom: CustomView,
  },
});
