---
source_path: "documentation/AVFAudio/avspeechsynthesizer/stopspeaking-at.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avspeechsynthesizer/stopspeaking-at"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:stopspeakingat:0000:0001">stopSpeaking(at:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:stopspeakingat:0001:0001">**Framework**: AVFAudio **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:stopspeakingat:0002:0001">지정한 경계에서 음성을 중지합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:stopspeakingat:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:stopspeakingat:0004:0001">iOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:stopspeakingat:0004:0002">iPadOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:stopspeakingat:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:stopspeakingat:0004:0004">macOS 10.14+</span>
- <span class="ko-segment" data-segment-id="seg:list:stopspeakingat:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:stopspeakingat:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:stopspeakingat:0004:0007">watchOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func stopSpeaking(at boundary: AVSpeechBoundary) -> Bool
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">Return Value</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001"><a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_0@@</a> if speech stops; otherwise, <a href="https://developer.apple.com/documentation/Swift/false">@@TOKEN_1@@</a>.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">Unlike pausing a speech synthesizer, which can resume after a pause, stopping the synthesizer immediately cancels speech and removes all unspoken utterances from the synthesizer’s queue.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0011:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0001"><code>boundary</code>: An enumeration that describes whether to stop speech immediately or only after the synthesizer finishes speaking the current word.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avspeechsynthesizer/speak(_:">func speak(AVSpeechUtterance)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">Adds the utterance you specify to the speech synthesizer’s queue.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avspeechsynthesizer/continuespeaking.md">func continueSpeaking() -&gt; Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">Resumes speech from its paused point.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avspeechsynthesizer/pausespeaking(at:">func pauseSpeaking(at: AVSpeechBoundary) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">Pauses speech at the boundary you specify.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avspeechboundary.md">enum AVSpeechBoundary</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">Specifies when to pause or stop speech.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avspeechsynthesizer/stopspeaking(at:">View on Apple Developer</a>)*</span>
