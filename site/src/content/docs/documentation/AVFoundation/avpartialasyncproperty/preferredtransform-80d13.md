---
source_path: "documentation/AVFoundation/avpartialasyncproperty/preferredtransform-80d13.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avpartialasyncproperty/preferredtransform-80d13"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:preferredtransform:0000:0001">preferredTransform</span>

<span class="ko-segment" data-segment-id="seg:paragraph:preferredtransform:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:preferredtransform:0002:0001">에셋의 시각적 콘텐츠에 대해 프레젠테이션 또는 처리 시 적용할 변환 선호도입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:preferredtransform:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:preferredtransform:0004:0001">iOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:preferredtransform:0004:0002">iPadOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:preferredtransform:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:preferredtransform:0004:0004">macOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:preferredtransform:0004:0005">tvOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:preferredtransform:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:preferredtransform:0004:0007">watchOS 8.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static var preferredTransform: AVAsyncProperty<Root, CGAffineTransform> { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">속성 값을 조회하려면 <a href="avasynchronouskeyvalueloading/load(_:isolation:">@@TOKEN_0@@</a>.md) 메서드를 사용합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">이 값은 일반적으로 <a href="https://developer.apple.com/documentation/CoreGraphics/CGAffineTransformIdentity">@@TOKEN_0@@</a>와 같지만 항상 그런 것은 아닙니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="avpartialasyncproperty/preferredrate.md">static var preferredRate: AVAsyncProperty&lt;Root, Float&gt;</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">에셋의 미디어 재생 속도 선호도입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avpartialasyncproperty/preferredvolume-20mb3.md">static var preferredVolume: AVAsyncProperty&lt;Root, Float&gt;</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">에셋의 오디오 미디어 재생 볼륨 선호도입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="avpartialasyncproperty/preferreddisplaycriteria.md">static var preferredDisplayCriteria: AVAsyncProperty&lt;Root, AVDisplayCriteria&gt;</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">콘텐츠를 최적으로 재생하기 위한 에셋의 표시 모드 선호도입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="avdisplaycriteria.md">class AVDisplayCriteria</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">시스템이 tvOS에서 표시 모드를 선택할 때 안내용으로 사용하는 객체입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avpartialasyncproperty/preferredtransform-80d13">View on Apple Developer</a>*</span>
