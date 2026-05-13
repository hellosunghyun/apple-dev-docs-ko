---
source_path: "documentation/AVFAudio/avaudiosequencer/rate.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiosequencer/rate"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:rate:0000:0001">rate</span>

<span class="ko-segment" data-segment-id="seg:paragraph:rate:0001:0001">**Framework**: AVFAudio **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:rate:0002:0001">시퀀서 플레이어의 재생 속도입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:rate:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:rate:0004:0001">iOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:rate:0004:0002">iPadOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:rate:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:rate:0004:0004">macOS 10.11+</span>
- <span class="ko-segment" data-segment-id="seg:list:rate:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:rate:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var rate: Float { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">기본 재생률은 <code>1.0</code>이며 <code>0.0</code>보다 커야 합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avaudiosequencer/isplaying.md">var isPlaying: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">시퀀서의 플레이어가 재생 상태인지 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001">[var tracks: [AVMusicTrack]](avaudiosequencer/tracks.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">An array that contains all the tracks in the sequence.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avaudiosequencer/currentpositioninbeats.md">var currentPositionInBeats: TimeInterval</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">The current playback position, in beats.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avaudiosequencer/currentpositioninseconds.md">var currentPositionInSeconds: TimeInterval</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">The current playback position, in seconds.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avaudiosequencer/tempotrack.md">var tempoTrack: AVMusicTrack</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">The track that contains tempo information about the sequence.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001">[var userInfo: [String : Any]](avaudiosequencer/userinfo.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">A dictionary that contains metadata from a sequence.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avaudiosequencer/infodictionarykey.md">AVAudioSequencer.InfoDictionaryKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">Constants that defines metadata keys for a sequencer.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avaudiosequencer/data(withsmpteresolution:error:">func data(withSMPTEResolution: Int, error: NSErrorPointer) -&gt; Data</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">Gets a data object that contains the events from the sequence.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avmusictimestampendoftrack.md">var AVMusicTimeStampEndOfTrack: Double</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">A timestamp you use to access all events in a music track through a beat range.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiosequencer/rate">View on Apple Developer</a>*</span>
