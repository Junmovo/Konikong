import ArkPadding from '@/components/Layout/Ark_elements/ArkPadding';
import SkeletonCharacterCard from '@/components/Layout/Ark_elements/components/Character/SkeletonCharacterCard';
import SkeletonMenu from '@/components/Layout/Ark_elements/components/Character/SkeletonMenu';
import SkeletonWeapon from '@/components/Layout/Ark_elements/components/Character/SkeletonWeapon';
import React from 'react';

const LostarkSerachLoading = () => {
  return (
    <div className="w-full">
      <ArkPadding>
        <div className="flex gap-5 mt-10">
          <SkeletonCharacterCard />
          <div className="w-full">
            <SkeletonMenu></SkeletonMenu>
            <SkeletonWeapon></SkeletonWeapon>
          </div>
        </div>
      </ArkPadding>
    </div>
  );
};

export default LostarkSerachLoading;
