---
source_path: "documentation/AVFAudio/avmusictimestamp.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avmusictimestamp"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avmusictimestamp:0000:0001">AVMusicTimeStamp</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avmusictimestamp:0001:0001">**Framework**: AVFAudio **Kind**: typealias</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avmusictimestamp:0002:0001">분수 형태의 박자 수입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avmusictimestamp:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avmusictimestamp:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmusictimestamp:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmusictimestamp:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmusictimestamp:0004:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmusictimestamp:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmusictimestamp:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmusictimestamp:0004:0007">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
typealias AVMusicTimeStamp = Double
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">시퀀서 타임라인 관련 메서드에는 이 값을 사용합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">시퀀스의 템포가 이 값과 시간(초) 사이의 관계를 결정합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avaudiosequencer/hosttime(forbeats:error:">func hostTime(forBeats: AVMusicTimeStamp, error: NSErrorPointer) -&gt; UInt64</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">시퀀스가 지정된 위치에서 재생하는 호스트 시간을 가져옵니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avaudiosequencer/seconds(forbeats:">func seconds(forBeats: AVMusicTimeStamp) -&gt; TimeInterval</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">트랙에서 지정된 박자 위치(타임스탬프)에 대한 시간을 초 단위로 가져옵니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avmusictimestamp">View on Apple Developer</a>*</span>
