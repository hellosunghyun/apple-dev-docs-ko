---
source_path: "documentation/AVFoundation/avcapturedevice/currentlensposition.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturedevice/currentlensposition"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:currentlensposition:0000:0001">currentLensPosition</span>

<span class="ko-segment" data-segment-id="seg:paragraph:currentlensposition:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:currentlensposition:0002:0001">현재 렌즈 위치를 나타내는 상수입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:currentlensposition:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:currentlensposition:0004:0001">iOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:currentlensposition:0004:0002">iPadOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:currentlensposition:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:currentlensposition:0004:0004">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class let currentLensPosition: Float
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">The value is <a href="https://developer.apple.com/documentation/CoreMedia/CMTime/invalid">@@TOKEN_0@@</a> while the effect is in progress, but changes to a valid time when the reaction effect completes and the system removes it from the list of <a href="avcapturedevice/reactioneffectsinprogress.md">@@TOKEN_1@@</a>.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avcapturedevice/islockingfocuswithcustomlenspositionsupported.md">var isLockingFocusWithCustomLensPositionSupported: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">기기가 특정 렌즈 위치로 초점을 고정할 수 있는지 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avcapturedevice/lensposition.md">var lensPosition: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">현재 렌즈의 초점 위치입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avcapturedevice/setfocusmodelocked(lensposition:completionhandler:">func setFocusModeLocked(lensPosition: Float, completionHandler: ((CMTime) -&gt; Void)?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">지정한 값으로 렌즈 위치를 잠그고 초점 모드를 고정 상태로 설정합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedevice/currentlensposition">View on Apple Developer</a>*</span>
