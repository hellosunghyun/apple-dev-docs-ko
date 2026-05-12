---
source_path: "documentation/AVFoundation/avdelegatingplaybackcoordinatorbufferingcommand/completionduedate.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avdelegatingplaybackcoordinatorbufferingcommand/completionduedate"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:completionduedate:0000:0001">completionDueDate</span>

<span class="ko-segment" data-segment-id="seg:paragraph:completionduedate:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:completionduedate:0002:0001">조정자가 명령 실행을 완료해야 하는 마감일입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:completionduedate:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:completionduedate:0004:0001">iOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:completionduedate:0004:0002">iPadOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:completionduedate:0004:0003">Mac Catalyst 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:completionduedate:0004:0004">macOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:completionduedate:0004:0005">tvOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:completionduedate:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var completionDueDate: Date? { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">재생을 위해 버퍼링이 필요함을 예상하는 명령은 조정자가 기한 내에 해당 명령의 완료 핸들러를 호출해야 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">조정자는 이 날짜까지 명령을 완료해야 그룹과 동기화됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">대신 조정자가 정지 복구 대기(stall recovery suspension)를 시작하고 해당 상태를 다른 참가자에게 전달해야 합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">이 날짜 이후에 명령을 완료하면 조정자가 현재 상태에 맞지 않는 재생 명령을 보낼 가능성이 높습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="avdelegatingplaybackcoordinatorbufferingcommand/anticipatedplaybackrate.md">var anticipatedPlaybackRate: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">조정자가 현재 항목을 재생할 것으로 예상하는 비율입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avdelegatingplaybackcoordinatorbufferingcommand/completionduedate">View on Apple Developer</a>*</span>
