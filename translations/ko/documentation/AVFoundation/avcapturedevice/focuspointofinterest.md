---
source_path: "documentation/AVFoundation/avcapturedevice/focuspointofinterest.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturedevice/focuspointofinterest"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:focuspointofinterest:0000:0001">focusPointOfInterest</span>

<span class="ko-segment" data-segment-id="seg:paragraph:focuspointofinterest:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:focuspointofinterest:0002:0001">초점의 관심 지점입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:focuspointofinterest:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:focuspointofinterest:0004:0001">iOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:focuspointofinterest:0004:0002">iPadOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:focuspointofinterest:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:focuspointofinterest:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:focuspointofinterest:0004:0005">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var focusPointOfInterest: CGPoint { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">Setting a value for this property doesn’t initiate a focusing operation.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">To focus the camera on a point of interest, first set this property’s value, then set the <a href="avcapturedevice/focusmode-swift.property.md">@@TOKEN_0@@</a> property to <a href="avcapturedevice/focusmode-swift.enum/autofocus.md">@@TOKEN_1@@</a> or <a href="avcapturedevice/focusmode-swift.enum/continuousautofocus.md">@@TOKEN_2@@</a>.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">This property’s <a href="https://developer.apple.com/documentation/CoreFoundation/CGPoint">@@TOKEN_0@@</a> value uses a coordinate system where <code>{0,0}</code> is the top-left of the picture area and <code>{1,1}</code> is the bottom-right.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">This coordinate system is always relative to a landscape device orientation with the home button on the right, regardless of the actual device orientation.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0003">You can convert between this coordinate system and view coordinates using <a href="avcapturevideopreviewlayer.md">@@TOKEN_0@@</a> methods.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">이 속성 값을 변경하기 전에 <a href="avcapturedevice/lockforconfiguration(">@@TOKEN_0@@</a>.md)을 호출하여 장치의 구성 속성에 대한 독점 접근 권한을 획득해야 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">그렇지 않으면 이 속성 값을 설정할 때 예외가 발생합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0003">장치 구성이 끝나면 <a href="avcapturedevice/unlockforconfiguration(">@@TOKEN_0@@</a>.md)를 호출해 잠금을 해제하고 다른 장치가 설정을 구성할 수 있도록 허용합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">이 속성은 키-값 관찰이 가능합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0012:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avcapturedevice/isfocuspointofinterestsupported.md">var isFocusPointOfInterestSupported: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">디바이스가 초점을 위한 관심 포인트를 지원하는지 나타내는 부울 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedevice/focuspointofinterest">View on Apple Developer</a>*</span>
