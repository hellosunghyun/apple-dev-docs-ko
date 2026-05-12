---
source_path: "documentation/AVFoundation/avcapturescreeninput/scalefactor.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturescreeninput/scalefactor"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:scalefactor:0000:0001">scaleFactor</span>

<span class="ko-segment" data-segment-id="seg:paragraph:scalefactor:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:scalefactor:0002:0001">화면에서 캡처한 비디오 버퍼를 스케일링할 비율을 나타냅니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:scalefactor:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:scalefactor:0004:0001">macOS 10.7+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var scaleFactor: CGFloat { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">기본적으로 <code>AVCaptureScreenInput</code>은 화면에서 비디오 버퍼를 배율 <code>1.0</code>(스케일링 없음)으로 캡처합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">이 속성을 사용해 버퍼를 지정된 배율로 스케일링할 수 있습니다. 예를 들어 <code>320x240</code> 캡처 영역에서 <code>scaleFactor</code>가 <code>2.0</code>이면 <code>640x480</code> 크기의 비디오 버퍼가 생성됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">관련 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avcapturescreeninput/minframeduration.md">var minFrameDuration: CMTime</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">화면 입력의 최소 프레임 지속 시간입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avcapturescreeninput/croprect.md">var cropRect: CGRect</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">캡처할 화면 영역의 경계 사각형을 픽셀 단위로 나타냅니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturescreeninput/scalefactor">View on Apple Developer</a>*</span>
