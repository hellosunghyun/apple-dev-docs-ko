---
source_path: "documentation/Accelerate/bnnslayerparameterscropresize/extrapolation-value.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnslayerparameterscropresize/extrapolation-value"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:extrapolationvalue:0000:0001">extrapolation_value</span>

<span class="ko-segment" data-segment-id="seg:paragraph:extrapolationvalue:0001:0001">**Framework**: Accelerate **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:extrapolationvalue:0002:0001">작업이 외삽에 사용하는 값입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:extrapolationvalue:0002:0002">기본값은 <code>0</code>입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:extrapolationvalue:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:extrapolationvalue:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:extrapolationvalue:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:extrapolationvalue:0004:0003">Mac Catalyst 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:extrapolationvalue:0004:0004">macOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:extrapolationvalue:0004:0005">tvOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:extrapolationvalue:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:extrapolationvalue:0004:0007">watchOS 9.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var extrapolation_value: Float
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="bnnslayerparameterscropresize/normalized_coordinates.md">var normalized_coordinates: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">작업이 좌표를 <code>0...1</code>로 정규화된 값으로 처리할지 지정하는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="bnnslayerparameterscropresize/spatial_scale.md">var spatial_scale: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnstensor/init(">View on Apple Developer</a>)*</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="bnnslayerparameterscropresize/sampling_mode.md">var sampling_mode: BNNSLinearSamplingMode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">작업이 샘플 포인트를 선택할 때 사용하는 샘플링 모드입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="bnnslayerparameterscropresize/box_coordinate_mode.md">var box_coordinate_mode: BNNSBoxCoordinateMode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">작업이 네 개의 바운딩 박스 좌표를 지정할 때 사용하는 규약을 정의하는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="bnnslayerparameterscropresize/method.md">var method: BNNSInterpolationMethod</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">보간 방법입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnslayerparameterscropresize/extrapolation_value">View on Apple Developer</a>*</span>
