---
source_path: "documentation/ARKit/arscnview/rendersmotionblur.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arscnview/rendersmotionblur"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:rendersmotionblur:0000:0001">rendersMotionBlur</span>

<span class="ko-segment" data-segment-id="seg:paragraph:rendersmotionblur:0001:0001">**Framework**: ARKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:rendersmotionblur:0002:0001">뷰가 모션 블러를 렌더링할지 여부를 결정합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:rendersmotionblur:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:rendersmotionblur:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:rendersmotionblur:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:rendersmotionblur:0004:0003">Mac Catalyst 13.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var rendersMotionBlur: Bool { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 속성은 기본적으로 활성화됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">The system calls thie closure when the input mute state changes, either due to setting the <a href="avaudioapplication/isinputmuted.md">@@TOKEN_0@@</a> state, or due to a Bluetooth audio accessory gesture (certain AirPods / Beats headphones) changing the mute state.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">!<a href="https://docs-assets.developer.apple.com/published/355e2c150e6b31f68b1f99074bfa3127/media-3231009%402x.png">모션 블러 적용 전후의 가상 콘텐츠 렌더링을 보여주는 스크린샷.</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">이 속성의 값은 <a href="https://developer.apple.com/documentation/SceneKit/SCNCamera">@@TOKEN_0@@</a>의 <a href="https://developer.apple.com/documentation/SceneKit/SCNCamera/motionBlurIntensity">@@TOKEN_1@@</a> 값을 덮어씁니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="arscnview/renderscameragrain.md">var rendersCameraGrain: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">앱의 가상 콘텐츠에 SceneKit이 이미지 노이즈 특성을 적용할지 여부를 결정하는 플래그입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/arkit/arscnview/rendersmotionblur">View on Apple Developer</a>*</span>
