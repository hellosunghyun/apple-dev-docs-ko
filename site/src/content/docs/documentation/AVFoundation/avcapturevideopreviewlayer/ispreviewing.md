---
source_path: "documentation/AVFoundation/avcapturevideopreviewlayer/ispreviewing.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturevideopreviewlayer/ispreviewing"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:ispreviewing:0000:0001">isPreviewing</span>

<span class="ko-segment" data-segment-id="seg:paragraph:ispreviewing:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:ispreviewing:0002:0001">레이어가 소스에서 비디오 프레임을 렌더링하고 있는지 나타내는 Boolean 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:ispreviewing:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:ispreviewing:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:ispreviewing:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:ispreviewing:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:ispreviewing:0004:0004">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var isPreviewing: Bool { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">미리보기 레이어는 캡처 세션의 <a href="avcapturesession/startrunning(">@@TOKEN_0@@</a>.md) 메서드를 호출하면 콘텐츠 표시를 시작합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">레이어를 <a href="avcapturemulticamsession.md">@@TOKEN_0@@</a> 인스턴스와 연결하면, 블로킹 호출인 <a href="avcapturesession/startrunning(">@@TOKEN_1@@</a>.md) 또는 <a href="avcapturesession/commitconfiguration(">@@TOKEN_2@@</a>.md)이 반환될 때까지 모든 비디오 미리보기 레이어에 콘텐츠가 표시됨이 보장됩니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">세션이 실행되는 동안에는 비디오 미리보기 레이어의 연결을 활성화 또는 비활성화하여 레이어로 비디오 흐름이 시작되거나 중지되도록 할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">연결의 <a href="avcaptureconnection/isenabled.md">@@TOKEN_0@@</a> 속성 변화를 key-value 관찰로 추적할 수 있으며, 비디오가 비디오 미리보기 레이어로 렌더링을 다시 시작할 때 사용자 인터페이스 변경이 정확히 동기화되도록 할 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">관련 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="avcapturevideopreviewlayer/videogravity.md">var videoGravity: AVLayerVideoGravity</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">레이어가 경계 내에서 비디오 콘텐츠를 표시하는 방식을 나타내는 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturevideopreviewlayer/ispreviewing">View on Apple Developer</a>*</span>
