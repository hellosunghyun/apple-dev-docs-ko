---
source_path: "documentation/AVFAudio/avspeechsynthesismarker/init-bookmarknameatbytesampleoffset.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avspeechsynthesismarker/init-bookmarknameatbytesampleoffset"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:initbookmarknameatbytesampleoffset:0000:0001">init(bookmarkName:atByteSampleOffset:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initbookmarknameatbytesampleoffset:0001:0001">**Framework**: AVFAudio **Kind**: init</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initbookmarknameatbytesampleoffset:0002:0001">이름과 오디오 버퍼의 오프셋으로 북마크 마커를 생성합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initbookmarknameatbytesampleoffset:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:initbookmarknameatbytesampleoffset:0004:0001">iOS 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initbookmarknameatbytesampleoffset:0004:0002">iPadOS 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initbookmarknameatbytesampleoffset:0004:0003">Mac Catalyst 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initbookmarknameatbytesampleoffset:0004:0004">macOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initbookmarknameatbytesampleoffset:0004:0005">tvOS 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initbookmarknameatbytesampleoffset:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initbookmarknameatbytesampleoffset:0004:0007">watchOS 10.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
init(bookmarkName mark: String, atByteSampleOffset byteSampleOffset: Int)
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>mark</code>: 북마크의 이름입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>byteSampleOffset</code>: 오디오 버퍼의 바이트 오프셋입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avspeechsynthesismarker/init(markertype:fortextrange:atbytesampleoffset:">init(markerType: AVSpeechSynthesisMarker.Mark, forTextRange: NSRange, atByteSampleOffset: Int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">요청 텍스트의 유형과 위치를 사용해 마커를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avspeechsynthesismarker/init(wordrange:atbytesampleoffset:">init(wordRange: NSRange, atByteSampleOffset: Int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">단어 범위와 오디오 버퍼 오프셋으로 단어 마커를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avspeechsynthesismarker/init(sentencerange:atbytesampleoffset:">init(sentenceRange: NSRange, atByteSampleOffset: Int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">문장 범위와 오디오 버퍼 오프셋으로 문장 마커를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avspeechsynthesismarker/init(paragraphrange:atbytesampleoffset:">init(paragraphRange: NSRange, atByteSampleOffset: Int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">문단 범위와 오디오 버퍼 오프셋으로 문단 마커를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avspeechsynthesismarker/init(phonemestring:atbytesampleoffset:">init(phonemeString: String, atByteSampleOffset: Int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">음소 범위와 오디오 버퍼 오프셋으로 음소 마커를 생성합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avspeechsynthesismarker/init(bookmarkname:atbytesampleoffset:">View on Apple Developer</a>)*</span>
