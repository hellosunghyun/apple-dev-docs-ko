---
source_path: "documentation/AVFoundation/avplayerlayer/videorect.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avplayerlayer/videorect"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:videorect:0000:0001">videoRect</span>

<span class="ko-segment" data-segment-id="seg:paragraph:videorect:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:videorect:0002:0001">레이어 경계 내에 표시되는 비디오 이미지의 현재 크기와 위치입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:videorect:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:videorect:0004:0001">iOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:videorect:0004:0002">iPadOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:videorect:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:videorect:0004:0004">macOS 10.9+</span>
- <span class="ko-segment" data-segment-id="seg:list:videorect:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:videorect:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var videoRect: CGRect { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">사각형의 크기와 위치는 미디어의 종횡비(16:9 또는 4:3), 레이어의 <a href="https://developer.apple.com/documentation/QuartzCore/CALayer/bounds">@@TOKEN_0@@</a>, 그리고 <a href="avplayerlayer/videogravity.md">@@TOKEN_1@@</a> 속성 값에 따라 달라집니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">이 속성은 key-value 관찰 가능합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="avplayerlayer/videogravity.md">var videoGravity: AVLayerVideoGravity</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">레이어 경계 내에서 플레이어의 시각적 콘텐츠를 표시하는 방법을 지정하는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avlayervideogravity.md">struct AVLayerVideoGravity</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">레이어 경계 내에서 플레이어의 시각적 콘텐츠를 표시하는 방법을 정의하는 구조체입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avplayerlayer/videorect">View on Apple Developer</a>*</span>
