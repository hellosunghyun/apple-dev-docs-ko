---
source_path: "documentation/AVKit/avpictureinpicturecontroller/invalidateplaybackstate.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avkit/avpictureinpicturecontroller/invalidateplaybackstate"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:invalidateplaybackstate:0000:0001">invalidatePlaybackState()</span>

<span class="ko-segment" data-segment-id="seg:paragraph:invalidateplaybackstate:0001:0001">**Framework**: AVKit **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:invalidateplaybackstate:0002:0001">컨트롤러의 현재 재생 상태를 무효화하고 샘플 버퍼 재생 delegate 객체에서 갱신된 상태를 가져옵니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:invalidateplaybackstate:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:invalidateplaybackstate:0004:0001">iOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:invalidateplaybackstate:0004:0002">iPadOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:invalidateplaybackstate:0004:0003">Mac Catalyst 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:invalidateplaybackstate:0004:0004">macOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:invalidateplaybackstate:0004:0005">tvOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:invalidateplaybackstate:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func invalidatePlaybackState()
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">재생을 시작하거나 일시 중지할 때와 기본 콘텐츠 길이가 변경될 때마다 이 메서드를 호출합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">*<a href="https://developer.apple.com/documentation/avkit/avpictureinpicturecontroller/invalidateplaybackstate(">View on Apple Developer</a>)*</span>
