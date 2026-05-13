---
source_path: "documentation/AVFoundation/avcoordinatedplaybacksuspension/end-proposingnewtime.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcoordinatedplaybacksuspension/end-proposingnewtime"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:endproposingnewtime:0000:0001">end(proposingNewTime:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:endproposingnewtime:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:endproposingnewtime:0002:0001">Ends a suspension and proposes a new playback time to the group.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:endproposingnewtime:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:endproposingnewtime:0004:0001">iOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:endproposingnewtime:0004:0002">iPadOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:endproposingnewtime:0004:0003">Mac Catalyst 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:endproposingnewtime:0004:0004">macOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:endproposingnewtime:0004:0005">tvOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:endproposingnewtime:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func end(proposingNewTime time: CMTime)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001"><a href="avassetresourceloadingrequest.md">@@TOKEN_0@@</a>를 로딩 완료하기 전에, 해당 <a href="avassetresourceloadingrequest/contentinformationrequest.md">@@TOKEN_1@@</a>가 <code>nil</code>이 아니면 모든 에셋 데이터가 사용 가능함을 나타내도록 값을 <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_3@@</a>로 설정합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">이는 데이터가 완전히 캐시되어 있거나, 사용자 지정 URL 스킴이 최종적으로 로컬 저장소의 파일을 참조하기 때문에 큰 데이터 흐름 최적화가 가능하므로 <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_0@@</a>일 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">역호환성을 위해 이 속성의 기본값은 <a href="https://developer.apple.com/documentation/Swift/false">@@TOKEN_0@@</a>입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">Similarly, playback commands from the group that arrive after this suspension ends, override a pending proposal.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0010:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0001"><code>time</code>: The proposed playback time. Passing a nonnumeric time results in the same behavior as calling the <a href="avcoordinatedplaybacksuspension/end(">@@TOKEN_1@@</a>.md) method.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0012:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avcoordinatedplaybacksuspension/end.md">func end()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">요청한 리소스가 포함하는 데이터 유형을 지정하는 UTI입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">요청한 리소스의 길이를 바이트 단위로 나타낸 값입니다.</span>
