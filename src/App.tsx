import { Presentation } from './components/Presentation'
import { CoverSlide } from './slides/CoverSlide'
import { SkillResearchSlide } from './slides/SkillResearchSlide'
import { DistributionPlanSlide } from './slides/DistributionPlanSlide'
import { CompetitiveLandscapeSlide1 } from './slides/CompetitiveLandscapeSlide1'
import { CompetitiveLandscapeSlide2 } from './slides/CompetitiveLandscapeSlide2'
import { CompetitiveLandscapeSlide3 } from './slides/CompetitiveLandscapeSlide3'
import { SkillResearchDetailSlide1 } from './slides/SkillResearchDetailSlide1'
import { SkillResearchDetailSlide2 } from './slides/SkillResearchDetailSlide2'
import { SkillResearchDetailSlide3 } from './slides/SkillResearchDetailSlide3'
import { SkillResearchDetailSlide4 } from './slides/SkillResearchDetailSlide4'
import { SkillResearchDetailSlide5 } from './slides/SkillResearchDetailSlide5'
import { DistributionPlanOverviewSlide } from './slides/DistributionPlanOverviewSlide'
import { DistributionPlanTwitterSlide } from './slides/DistributionPlanTwitterSlide'
import { DistributionPlanKOLSlide } from './slides/DistributionPlanKOLSlide'
import { DistributionPlanEventSlide } from './slides/DistributionPlanEventSlide'
import { DistributionPlanOrganicSlide } from './slides/DistributionPlanOrganicSlide'
import { DistributionPlanPartnershipSlide } from './slides/DistributionPlanPartnershipSlide'
import { DistributionPlanTimelineSlide } from './slides/DistributionPlanTimelineSlide'
import { OutroSlide } from './slides/OutroSlide'

const slides = [
  <CoverSlide key="cover" />,
  <CompetitiveLandscapeSlide1 key="cl1" />,
  <CompetitiveLandscapeSlide2 key="cl2" />,
  <CompetitiveLandscapeSlide3 key="cl3" />,
  <SkillResearchSlide key="skill-research" />,
  <SkillResearchDetailSlide1 key="skill-1" />,
  <SkillResearchDetailSlide2 key="skill-2" />,
  <SkillResearchDetailSlide3 key="skill-3" />,
  <SkillResearchDetailSlide4 key="skill-4" />,
  <SkillResearchDetailSlide5 key="skill-5" />,
  <DistributionPlanSlide key="distribution-plan" />,
  <DistributionPlanOverviewSlide key="dist-1" />,
  <DistributionPlanTwitterSlide key="dist-2" />,
  <DistributionPlanKOLSlide key="dist-3" />,
  <DistributionPlanEventSlide key="dist-4" />,
  <DistributionPlanOrganicSlide key="dist-5" />,
  <DistributionPlanPartnershipSlide key="dist-6" />,
  <DistributionPlanTimelineSlide key="dist-7" />,
  <OutroSlide key="outro" />,
]

export default function App() {
  return (
    <div className="w-full h-full">
      <Presentation slides={slides} />
    </div>
  )
}
