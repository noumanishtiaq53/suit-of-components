import { AddNewItemButton } from "@/components/Buttons/AddNewItemButton";
import { ItemInitialHoveredIconCard } from "@/components/custom-cards/ItemInitialHoveredIconCard";
import { CustomAccordion } from "@/components/CustomAccordion";
import {
  ACCORDION_ACTIONS,
  ACCORDION_VARIANTS,
} from "@/constants/mui-constant";
import { useRouter } from "next/router";
import { useState } from "react";

export const asetExample = () => {
  const router = useRouter();

  const [parentDetails, setParentDetails] = useState<any>({});

  const [childDetails, setChildDetails] = useState<any>({});
  const data: any = {
    data: [{ _id: 1, name: "parent1", childList: [{ name: "child1" }] }],
  };

  const handleIconAction = (e: any, action: any, data: any) => {
    e?.stopPropagation();
    if (action === ACCORDION_ACTIONS?.EDIT) {
      router?.push({
        pathname: "",
        query: {
          type: data?.type,
          parentId: data?.parentId,
          ...(data?.childId
            ? {
                childId: data?.childId,
              }
            : {}),
        },
      });
      return;
    }
    if (action === ACCORDION_ACTIONS?.DELETE) {
      setDeleteModalOpen(true);
      setSelectedLocation({
        childId: data?.childId,
        parentId: data?.parentId,
        isChild: !!data?.childId,
      });
    }
  };

  return (
    <>
      <ItemInitialHoveredIconCard
        initial="D"
        name="Default Fields"
        id={"default"}
        onIconClick={() => {
          router?.push({
            pathname: "",
          });
        }}
      />
      {data?.data?.map((parent: any) => (
        <CustomAccordion
          variantType={ACCORDION_VARIANTS?.TERTIARY}
          key={parent?._id}
          disabled={parent?.perDefine}
          summaryKey={parent?._id}
          accordionSummary={
            <ItemInitialHoveredIconCard
              name={parent?.name}
              id={parent?._id}
              key={parent?._id}
              iconList={["edit"]}
              onIconClick={(event: any) => {
                event?.stopPropagation();
                setParentDetails({ open: true, parentData: parent });
              }}
            />
          }
        >
          {!!parent?.childList?.length &&
            parent?.childList?.map((child: any) => (
              <ItemInitialHoveredIconCard
                initial={parent?.name?.slice(0, 1)}
                name={child?.name}
                id={child?._id}
                key={child?._id}
                iconList={["edit"]}
                onIconClick={() =>
                  setChildDetails({
                    open: true,
                    parentData: parent,
                    childData: child,
                  })
                }
              />
            ))}
          <AddNewItemButton
            variant={"outlined"}
            color={"secondary"}
            iconType="square"
            name="Add New"
            onClick={() =>
              setChildDetails({
                open: true,
                parentData: parent,
                childData: null,
              })
            }
          />
        </CustomAccordion>
      ))}
    </>
  );

  return (
    <>
      {data?.data?.map((parent: any, index: number) => (
        <CustomAccordion
          variantType={ACCORDION_VARIANTS?.TERTIARY}
          key={parent?._id}
          summaryKey={parent?._id}
          accordionSummary={
            <ItemInitialHoveredIconCard
              id={parent?._id}
              name={parent?.locationName}
              key={parent?._id}
              iconList={["edit", "delete"]}
              onIconClick={(e: any, action: string) =>
                handleIconAction?.(e, action, {
                  type: "parent",
                  parentId: parent?._id,
                })
              }
            />
          }
        >
          {!!parent?.childLocaions?.length &&
            parent?.childLocaions?.map((child: any) => (
              <ItemInitialHoveredIconCard
                initial={parent?.locationName?.slice(0, 1)}
                name={child?.locationName}
                key={child?._id}
                id={child?._id}
                iconList={["edit", "delete"]}
                onIconClick={(e: any, action: string) =>
                  handleIconAction?.(e, action, {
                    type: "child",
                    parentId: parent?._id,
                    childId: child?._id,
                  })
                }
              />
            ))}
          <AddNewItemButton
            variant={"outlined"}
            color={"secondary"}
            iconType="square"
            onClick={() =>
              router?.push({
                pathname: "ADD_NEW",
                query: {
                  type: "child",
                  parentId: parent?._id,
                },
              })
            }
          />
        </CustomAccordion>
      ))}
    </>
  );
};
