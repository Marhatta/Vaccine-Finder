import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export const TweetSkeleton = () => {
  return (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
        <SkeletonPlaceholder.Item
          width={wp('10%')}
          height={wp('10%')}
          borderRadius={50}
        />
        <SkeletonPlaceholder.Item marginLeft={wp('3%')}>
          <SkeletonPlaceholder.Item
            width={wp('30%')}
            height={hp('3%')}
            borderRadius={4}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>

      <SkeletonPlaceholder.Item marginTop={hp('2%')}>
        <SkeletonPlaceholder.Item
          width={wp('90%')}
          height={hp('50%')}
          borderRadius={10}
        />
      </SkeletonPlaceholder.Item>

      <SkeletonPlaceholder.Item
        flexDirection="row"
        alignItems="center"
        marginTop={hp('2%')}>
        <SkeletonPlaceholder.Item
          width={wp('10%')}
          height={wp('10%')}
          borderRadius={50}
        />
        <SkeletonPlaceholder.Item marginLeft={wp('3%')}>
          <SkeletonPlaceholder.Item
            width={wp('30%')}
            height={hp('3%')}
            borderRadius={4}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>

      <SkeletonPlaceholder.Item marginTop={hp('2%')}>
        <SkeletonPlaceholder.Item
          width={wp('90%')}
          height={hp('50%')}
          borderRadius={10}
        />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export const StatLineSkeleton = () => {
  return (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item
        width={wp('23%')}
        height={hp('3%')}
        borderRadius={5}
      />
    </SkeletonPlaceholder>
  );
};

export const ChartSkeleton = () => {
  return (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item
        width={wp('90%')}
        height={hp('35%')}
        borderRadius={10}
        marginBottom={hp('3%')}
      />
    </SkeletonPlaceholder>
  );
};
