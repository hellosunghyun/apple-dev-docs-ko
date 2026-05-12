---
source_path: "documentation/AVFoundation/avcapturescreeninput/capturescursor.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturescreeninput/capturescursor"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:capturescursor:0000:0001">capturesCursor</span>

<span class="ko-segment" data-segment-id="seg:paragraph:capturescursor:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:capturescursor:0002:0001">캡처된 출력에 마우스 커서가 표시되는지 지정하는 Boolean 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:capturescursor:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:capturescursor:0004:0001">macOS 10.8+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var capturesCursor: Bool { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 속성이 <code>true</code>(기본값)인 경우 캡처한 비디오 프레임에 마우스 포인터가 포함됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">이 속성을 <code>false</code>로 변경하면 캡처된 출력에는 화면의 창만 포함됩니다. 즉, 캡처된 비디오에서 마우스 포인터가 보이지 않습니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0001">**참고**: 마우스 포인터를 캡처 출력에서 숨기더라도, 캡처가 제공하는 <a href="https://developer.apple.com/documentation/CoreMedia/CMSampleBuffer">@@TOKEN_0@@</a> 객체에는 커서 위치와 마우스 버튼 상태에 대한 메타데이터가 포함됩니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0002"><a href="https://developer.apple.com/documentation/CoreMediaIO/kCMIOSampleBufferAttachmentKey_MouseAndKeyboardModifiers">@@TOKEN_0@@</a>을 참조합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="avcapturescreeninput/capturesmouseclicks.md">var capturesMouseClicks: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">캡처된 출력에서 마우스 클릭이 강조 표시되는지 지정하는 Boolean 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturescreeninput/capturescursor">View on Apple Developer</a>*</span>
