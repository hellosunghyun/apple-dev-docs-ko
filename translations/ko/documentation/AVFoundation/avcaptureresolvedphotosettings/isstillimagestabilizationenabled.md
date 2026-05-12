---
source_path: "documentation/AVFoundation/avcaptureresolvedphotosettings/isstillimagestabilizationenabled.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcaptureresolvedphotosettings/isstillimagestabilizationenabled"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:isstillimagestabilizationenabled:0000:0001">isStillImageStabilizationEnabled</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isstillimagestabilizationenabled:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isstillimagestabilizationenabled:0002:0001">이 캡처에서 이미지 안정화가 사용되는지 나타내는 부울 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isstillimagestabilizationenabled:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:isstillimagestabilizationenabled:0004:0001">iOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:isstillimagestabilizationenabled:0004:0002">iPadOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:isstillimagestabilizationenabled:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:isstillimagestabilizationenabled:0004:0004">tvOS 10.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var isStillImageStabilizationEnabled: Bool { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 속성은 <a href="avcapturephotosettings.md">@@TOKEN_0@@</a>의 <a href="avcapturephotosettings/isautostillimagestabilizationenabled.md">@@TOKEN_1@@</a> 속성에 해당합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">이 값이 <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_0@@</a>인 경우, 장치는 저조도 조건에서 손떨림 보정을 위해 자동으로 안정화를 적용합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">자동 안정화에는 항상 디지털 이미지 안정화가 포함되며, 현재 장치에 따라 광학 렌즈 안정화가 포함될 수도 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">A metadata capture output’s <a href="avcapturemetadataoutput/rectofinterest.md">@@TOKEN_0@@</a> a <a href="https://developer.apple.com/documentation/CoreFoundation/CGRect">@@TOKEN_1@@</a> value where <code>{0,0}</code> represents the top-left of the picture area, and <code>{1,1}</code> represents the bottom-right on an unrotated image.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">따라서 캡처 직전 순간이 되어야 시스템에서 안정화 사용 여부를 알 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0003">사진 출력이 <a href="avcapturephotocapturedelegate/photooutput(_:willbegincapturefor:">@@TOKEN_0@@</a>.md) 메서드(또는 캡처 프로세스의 이후에 호출되는 다른 대리자 메서드)를 호출하면, 이 속성을 사용해 안정화가 활성 상태인지 확인할 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avcaptureresolvedphotosettings/isflashenabled.md">var isFlashEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">이 캡처에서 카메라 플래시가 동작하는지 여부를 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avcaptureresolvedphotosettings/isredeyereductionenabled.md">var isRedEyeReductionEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">사진 촬영 시 카메라가 적목 현상을 자동으로 줄이는지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avcaptureresolvedphotosettings/isvirtualdevicefusionenabled.md">var isVirtualDeviceFusionEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">시스템이 가상 장치 이미지 퓨전을 자동으로 사용하는지 지정하는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avcaptureresolvedphotosettings/isfastcaptureprioritizationenabled.md">var isFastCapturePrioritizationEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">사진을 캡처할 때 시스템이 빠른 캡처 우선순위를 사용하는지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avcaptureresolvedphotosettings/iscontentawaredistortioncorrectionenabled.md">var isContentAwareDistortionCorrectionEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">사진 촬영 시 시스템이 콘텐츠 인식 왜곡 보정을 적용하는지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avcaptureresolvedphotosettings/isdualcamerafusionenabled.md">var isDualCameraFusionEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">이 캡처가 듀얼 카메라의 이미지 데이터를 결합하는지 나타내는 부울 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcaptureresolvedphotosettings/isstillimagestabilizationenabled">View on Apple Developer</a>*</span>
