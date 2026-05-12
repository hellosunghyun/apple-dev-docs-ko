---
source_path: "documentation/AVFAudio/avmidiplayer/play.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avmidiplayer/play"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:play:0000:0001">play(_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:play:0001:0001">**Framework**: AVFAudio **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:play:0002:0001">MIDI 시퀀스를 재생합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:play:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:play:0004:0001">iOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:play:0004:0002">iPadOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:play:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:play:0004:0004">macOS 10.10+</span>
- <span class="ko-segment" data-segment-id="seg:list:play:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:play:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func play() async
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>completionHandler</code>: 재생이 완료될 때 시스템이 호출하는 클로저입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0009:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:closures:0010:0001">Closures</span>

- <span class="ko-segment" data-segment-id="seg:list:closures:0011:0001"><a href="avmidiplayercompletionhandler.md">typealias AVMIDIPlayerCompletionHandler</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:closures:0012:0001">MIDI 재생이 완료될 때 시스템이 호출하는 콜백입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avmidiplayer/preparetoplay.md">func prepareToPlay()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">모든 이벤트를 미리 로딩하여 시퀀스 재생을 준비합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avmidiplayercompletionhandler.md">typealias AVMIDIPlayerCompletionHandler</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">MIDI 재생이 완료될 때 시스템이 호출하는 콜백입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avmidiplayer/stop.md">func stop()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">시퀀스 재생을 중지합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avmidiplayer/isplaying.md">var isPlaying: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">시퀀스가 재생 중인지 나타내는 Boolean 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avmidiplayer/play(_:">View on Apple Developer</a>)*</span>
