---
source_path: "documentation/AVFAudio/avaudiosequencer/currentpositioninbeats.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiosequencer/currentpositioninbeats"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:currentpositioninbeats:0000:0001">currentPositionInBeats</span>

<span class="ko-segment" data-segment-id="seg:paragraph:currentpositioninbeats:0001:0001">**Framework**: AVFAudio **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:currentpositioninbeats:0002:0001">현재 재생 위치를 박자 단위로 표시합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:currentpositioninbeats:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:currentpositioninbeats:0004:0001">iOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:currentpositioninbeats:0004:0002">iPadOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:currentpositioninbeats:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:currentpositioninbeats:0004:0004">macOS 10.11+</span>
- <span class="ko-segment" data-segment-id="seg:list:currentpositioninbeats:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:currentpositioninbeats:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var currentPositionInBeats: TimeInterval { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">This property contains an array of <a href="avaudiosessionportdescription.md">@@TOKEN_0@@</a> objects representing the audio outputs associated with the current audio route for a session.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">플레이어가 재생 상태일 때도 이 속성을 업데이트할 수 있으며, 이 경우 재생이 새 위치에서 다시 시작됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avaudiosequencer/isplaying.md">var isPlaying: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">시퀀서의 플레이어가 재생 상태인지 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avaudiosequencer/rate.md">var rate: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">시퀀서 플레이어의 재생 속도입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001">[var tracks: [AVMusicTrack]](avaudiosequencer/infodictionarykey/copyright.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">시퀀스의 모든 트랙을 포함하는 배열입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avaudiosequencer/currentpositioninseconds.md">var currentPositionInSeconds: TimeInterval</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">현재 재생 위치를 초 단위로 표시합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avaudiosequencer/tempotrack.md">var tempoTrack: AVMusicTrack</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">시퀀스의 템포 정보를 포함하는 트랙입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001">[var userInfo: [String : Any]](avaudiosequencer/infodictionarykey/title.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">시퀀스의 메타데이터가 포함된 딕셔너리입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avaudiosequencer/infodictionarykey.md">AVAudioSequencer.InfoDictionaryKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">시퀀서의 메타데이터 키를 정의하는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avaudiosequencer/infodictionarykey/subtitle.md">func data(withSMPTEResolution: Int, error: NSErrorPointer) -&gt; Data</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">시퀀스의 이벤트를 포함하는 data 객체를 가져옵니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avmusictimestampendoftrack.md">var AVMusicTimeStampEndOfTrack: Double</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">박자 범위를 통해 음악 트랙의 모든 이벤트에 접근할 때 사용하는 타임스탬프입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiosequencer/currentpositioninbeats">View on Apple Developer</a>*</span>
