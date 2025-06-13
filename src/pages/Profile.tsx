import ProfileOverview from "@/components/ProfileOverview"
import { HeaderSection } from "@/stories/common/Input/HeaderSection"
import { CustomTabs } from "@/stories/common/Navigation/CustomTabs"
import { ProfileInfo } from "@/stories/common/Profile/ProfileInfo"
import { useTranslation } from "react-i18next"
import Layout from "./Layout"
import ProfileAccountSettings from "@/components/ProfileAccountSettings"
import ProfilePasswordSettings from "@/components/ProfilePasswordSettings"

function Profile() {
  const { t } = useTranslation();
  const tabsData = [
    {
      value: "overview",
      label: t('profile.overview.title'),
      content: <ProfileOverview/>,
    },
    {
      value: "account",
      label: t('profile.accountSettings.title'),
      content: <ProfileAccountSettings/>,
    },
    {
      value: "password",
      label: t('profile.changePassword.title'),
      content: <ProfilePasswordSettings/>,
    },
  ]
  return (
    <Layout>
      <div className="flex flex-col">
        {/* body */}
        <div className='flex-col flex-1'>
          <HeaderSection/>
          <ProfileInfo/>
          <div className='w-full px-4 pb-4'>
            <CustomTabs tabs={tabsData}/>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Profile
