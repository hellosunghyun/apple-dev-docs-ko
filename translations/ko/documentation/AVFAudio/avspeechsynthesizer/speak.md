---
source_path: "documentation/AVFAudio/avspeechsynthesizer/speak.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avspeechsynthesizer/speak"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:speak:0000:0001">speak(_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:speak:0001:0001">**Framework**: AVFAudio **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:speak:0002:0001">지정한 <code>utterance</code>를 음성 합성기 큐에 추가합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:speak:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:speak:0004:0001">iOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:speak:0004:0002">iPadOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:speak:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:speak:0004:0004">macOS 10.14+</span>
- <span class="ko-segment" data-segment-id="seg:list:speak:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:speak:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:speak:0004:0007">watchOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func speak(_ utterance: AVSpeechUtterance)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0008:0001">⚠️ **경고**: 동일한 <code>utterance</code>를 여러 번 큐에 추가하면 예외가 발생합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>utterance</code>: 발화할 텍스트를 포함하는 <a href="avspeechutterance.md">@@TOKEN_1@@</a> 인스턴스입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avspeechsynthesizer/continuespeaking.md">func continueSpeaking() -&gt; Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">일시 정지한 지점에서 음성을 다시 시작합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avspeechsynthesizer/pausespeaking(at:">func pauseSpeaking(at: AVSpeechBoundary) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">지정한 경계에서 음성을 일시 중지합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avspeechsynthesizer/stopspeaking(at:">func stopSpeaking(at: AVSpeechBoundary) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">지정한 경계에서 음성을 중지합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avspeechboundary.md">enum AVSpeechBoundary</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">음성을 일시 중지하거나 중지할 시점을 지정합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avspeechsynthesizer/speak(_:">Apple Developer에서 보기</a>)*</span>
