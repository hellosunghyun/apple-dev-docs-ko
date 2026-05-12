---
source_path: "documentation/AVFAudio/avaudiochannellayout/isequal.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiochannellayout/isequal"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:isequal:0000:0001">isEqual(_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isequal:0001:0001">**Framework**: AVFAudio **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isequal:0002:0001">다른 오디오 채널 레이아웃이 현재 레이아웃과 정확히 같은지 나타냅니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isequal:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:isequal:0004:0001">iOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:isequal:0004:0002">iPadOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:isequal:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:isequal:0004:0004">macOS 10.10+</span>
- <span class="ko-segment" data-segment-id="seg:list:isequal:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:isequal:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:isequal:0004:0007">watchOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func isEqual(_ object: Any) -> Bool
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">이 값이 <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_0@@</a>면 동일한지 여부를 나타내고, 그렇지 않으면 <a href="https://developer.apple.com/documentation/Swift/false">@@TOKEN_1@@</a>입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>object</code>: 비교할 오디오 채널 레이아웃 객체입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avaudiochannelcount.md">typealias AVAudioChannelCount</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">오디오 채널의 수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avaudiochannellayout/channelcount.md">var channelCount: AVAudioChannelCount</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">오디오 데이터의 채널 수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avaudiochannellayout/layout.md">var layout: UnsafePointer&lt;AudioChannelLayout&gt;</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">오디오 채널의 기본 레이아웃입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avaudiochannellayout/layouttag.md">var layoutTag: AudioChannelLayoutTag</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">오디오 채널의 기본 레이아웃 태그입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiochannellayout/isequal(_:">View on Apple Developer</a>)*</span>
