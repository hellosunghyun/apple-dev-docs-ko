---
source_path: "documentation/AVFoundation/avcaptureaudiofileoutput/audiosettings.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcaptureaudiofileoutput/audiosettings"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:audiosettings:0000:0001">audioSettings</span>

<span class="ko-segment" data-segment-id="seg:paragraph:audiosettings:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:audiosettings:0002:0001">수신기에서 출력하기 전에 오디오를 디코드하거나 재인코드할 때 사용하는 설정입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:audiosettings:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:audiosettings:0004:0001">macOS 10.7+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var audioSettings: [String : Any]? { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">You may set the value of a capture device’s <a href="avcapturedevice/activeformat.md">@@TOKEN_0@@</a> in two ways:</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">이 속성의 값을 <code>nil</code>로 설정하면 출력은 장치의 기본 형식으로 샘플을 제공합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001">[var metadata: [AVMetadataItem]](avcaptureaudiofileoutput/metadata.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">수신기의 출력 파일에 작성할 메타데이터의 컬렉션입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcaptureaudiofileoutput/audiosettings">View on Apple Developer</a>*</span>
