import React from "react";
import Heading from "./ui/Heading";
import TeamMemberSlide from "./ui/TeamMemberSlide";

export default function MeetOurTeam() {
  return (
    <div className="min-h-screen mt-[130px]">
      <Heading
        title="Team"
        subtitle="Meet Our Team"
        para={`the majority have suffered alteration in some form, by injected humour, or randomised <br> words which don't look even slightly believable. `}
      />
      <div className="mt-14">
        {/* Team Member Component */}
        <TeamMemberSlide/>
      </div>
    </div>
  );
}
