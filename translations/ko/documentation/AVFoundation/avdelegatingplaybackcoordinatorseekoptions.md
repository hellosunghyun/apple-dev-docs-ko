---
source_path: "documentation/AVFoundation/avdelegatingplaybackcoordinatorseekoptions.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avdelegatingplaybackcoordinatorseekoptions"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avdelegatingplaybackcoordinatorseekoptions:0000:0001">AVDelegatingPlaybackCoordinatorSeekOptions</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avdelegatingplaybackcoordinatorseekoptions:0001:0001">**Framework**: AVFoundation **Kind**: struct</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avdelegatingplaybackcoordinatorseekoptions:0002:0001">탐색 옵션을 정의하는 상수입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avdelegatingplaybackcoordinatorseekoptions:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avdelegatingplaybackcoordinatorseekoptions:0004:0001">iOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avdelegatingplaybackcoordinatorseekoptions:0004:0002">iPadOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avdelegatingplaybackcoordinatorseekoptions:0004:0003">Mac Catalyst 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avdelegatingplaybackcoordinatorseekoptions:0004:0004">macOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avdelegatingplaybackcoordinatorseekoptions:0004:0005">tvOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avdelegatingplaybackcoordinatorseekoptions:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
struct AVDelegatingPlaybackCoordinatorSeekOptions
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:seek-options:0008:0001">탐색 옵션</span>

- <span class="ko-segment" data-segment-id="seg:list:seek-options:0009:0001"><a href="avdelegatingplaybackcoordinatorseekoptions/resumeimmediately.md">static var resumeImmediately: AVDelegatingPlaybackCoordinatorSeekOptions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:seek-options:0010:0001">조정자가 다른 참가자의 준비 상태나 일시 중단 여부와 상관없이 가능한 한 빨리 재생을 재개해야 함을 나타내는 옵션입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:initializers:0011:0001">Initializers</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0012:0001"><a href="avdelegatingplaybackcoordinatorseekoptions/init(rawvalue:">init(rawValue: UInt)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0013:0001">문자열로 속도 변경 옵션을 생성합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0014:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0015:0001">준수 대상</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0016:0001"><a href="../Swift/BitwiseCopyable.md">BitwiseCopyable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0016:0002"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0016:0003"><a href="../Swift/ExpressibleByArrayLiteral.md">ExpressibleByArrayLiteral</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0016:0004"><a href="../Swift/OptionSet.md">OptionSet</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0016:0005"><a href="../Swift/RawRepresentable.md">RawRepresentable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0016:0006"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0016:0007"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0016:0008"><a href="../Swift/SetAlgebra.md">SetAlgebra</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0017:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avmetadataidentifier/id3metadataband.md">func coordinateRateChange(to: Float, options: AVDelegatingPlaybackCoordinatorRateChangeOptions)</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">필요한 경우 다른 참가자가 준비될 때까지 대기하면서 모든 참가자의 속도 변경을 조정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avmetadataidentifier/id3metadatabeatsperminute.md">func coordinateSeek(to: CMTime, options: AVDelegatingPlaybackCoordinatorSeekOptions)</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">지정된 시간으로의 탐색을 모든 연결된 참가자에서 조정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avmetadataidentifier/id3metadatacomments.md">func transitionToItem(withIdentifier: String?, proposingInitialTimingBasedOn: CMTimebase?)</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">조정자에게 새 항목으로 전환하라고 알립니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avdelegatingplaybackcoordinator/reapplycurrentitemstatetoplaybackcontroldelegate.md">func reapplyCurrentItemStateToPlaybackControlDelegate()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">현재 항목을 다른 참가자들의 상태와 동기화하기 위해 현재 재생 상태 명령을 다시 발행하도록 조정자에 알립니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avdelegatingplaybackcoordinatorratechangeoptions.md">struct AVDelegatingPlaybackCoordinatorRateChangeOptions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">속도 변경 옵션을 정의하는 상수입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avdelegatingplaybackcoordinatorseekoptions">View on Apple Developer</a>*</span>
