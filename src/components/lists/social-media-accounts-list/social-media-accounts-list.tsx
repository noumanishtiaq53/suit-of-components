import { CustomBoxUI } from "@/ui/custom-box/custom-box.ui";
import { CustomCardUI } from "@/ui/custom-card/custom-card.ui";
import { CustomIconUI } from "@/ui/custom-icon/custom-icon.ui";

export const SocialMediaAccountsList = (props: any) => {
  const { socialMediaAccountsListData = [] } = props;
  return (
    <CustomBoxUI
      customStyles={{ display: "flex", alignItems: "center", gap: 2 }}
    >
      {socialMediaAccountsListData?.length &&
        socialMediaAccountsListData?.map((account: any) => (
          <CustomCardUI
            key={account?._id}
            backgroundColor={account?.backgroundColor}
            padding={0.7}
            onClick={() => console.log(account?._id)}
          >
            <CustomBoxUI
              customStyles={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CustomIconUI
                Icon={account?.icon}
                customStyles={{ color: "common.white" }}
              />
            </CustomBoxUI>
          </CustomCardUI>
        ))}
    </CustomBoxUI>
  );
};
