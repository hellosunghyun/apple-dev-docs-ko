---
source_path: "documentation/AVFoundation/avdelegatingplaybackcoordinator/transitiontoitem-withidentifierproposinginitialtimingbasedon.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avdelegatingplaybackcoordinator/transitiontoitem-withidentifierproposinginitialtimingbasedon"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:transitiontoitemwithidentifierproposinginitialtimingbasedon:0000:0001">transitionToItem(withIdentifier:proposingInitialTimingBasedOn:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:transitiontoitemwithidentifierproposinginitialtimingbasedon:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:transitiontoitemwithidentifierproposinginitialtimingbasedon:0002:0001">코디네이터에 새 항목으로의 전환을 지시합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:transitiontoitemwithidentifierproposinginitialtimingbasedon:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:transitiontoitemwithidentifierproposinginitialtimingbasedon:0004:0001">iOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:transitiontoitemwithidentifierproposinginitialtimingbasedon:0004:0002">iPadOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:transitiontoitemwithidentifierproposinginitialtimingbasedon:0004:0003">Mac Catalyst 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:transitiontoitemwithidentifierproposinginitialtimingbasedon:0004:0004">macOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:transitiontoitemwithidentifierproposinginitialtimingbasedon:0004:0005">tvOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:transitiontoitemwithidentifierproposinginitialtimingbasedon:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func transitionToItem(withIdentifier itemIdentifier: String?, proposingInitialTimingBasedOn snapshotTimebase: CMTimebase?)
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>itemIdentifier</code>: 새 현재 항목의 식별자이며, 재생할 항목이 없으면 <code>nil</code>입니다. <code>snapshotTimebase</code>: 새 항목의 초기 재생 상태를 전달하는 타임베이스입니다. <code>nil</code>을 지정하면 코디네이터는 플레이어가 <a href="https://developer.apple.com/documentation/CoreMedia/CMTime/zero">@@TOKEN_4@@</a>에서 일시 중단 상태라고 가정합니다. AVFoundation 재생 객체(예: <a href="avsamplebufferrendersynchronizer.md">@@TOKEN_5@@</a>)에서 이 값으로 전달할 적절한 타임베이스를 가져올 수 있습니다. 또한 <a href="https://developer.apple.com/documentation/CoreMedia/CMTimebaseCreateWithSourceClock(allocator:sourceClock:timebaseOut:">@@TOKEN_6@@</a>) 함수를 사용해 직접 생성할 수도 있습니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>snapshotTimebase</code>: A time base that communicates the initial playback state of the new item. If you specify <code>nil</code>, the coordinator assumes that the player pauses at <a href="https://developer.apple.com/documentation/CoreMedia/CMTime/zero">@@TOKEN_2@@</a>. You can retrieve an appropriate time base to pass for this value from AVFoundation playback objects like <a href="avsamplebufferrendersynchronizer.md">@@TOKEN_3@@</a>. You can also create one manually using the <a href="https://developer.apple.com/documentation/CoreMedia/CMTimebaseCreateWithSourceClock(allocator:sourceClock:timebaseOut:">@@TOKEN_4@@</a>) function.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avdelegatingplaybackcoordinator/coordinateratechange(to:options:">func coordinateRateChange(to: Float, options: AVDelegatingPlaybackCoordinatorRateChangeOptions)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">Coordinates a rate change across all participants, waiting for others to become ready, if necessary.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avdelegatingplaybackcoordinator/coordinateseek(to:options:">func coordinateSeek(to: CMTime, options: AVDelegatingPlaybackCoordinatorSeekOptions)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">Coordinates a seek to the specified time for all connected participants.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avdelegatingplaybackcoordinator/reapplycurrentitemstatetoplaybackcontroldelegate.md">func reapplyCurrentItemStateToPlaybackControlDelegate()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">Tells the coordinator to reissue current play state commands to synchronize the current item to the state of other participants.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avdelegatingplaybackcoordinatorseekoptions.md">struct AVDelegatingPlaybackCoordinatorSeekOptions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">Constants that define seek options.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avdelegatingplaybackcoordinatorratechangeoptions.md">struct AVDelegatingPlaybackCoordinatorRateChangeOptions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">Constants that define rate change options.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avdelegatingplaybackcoordinator/transitiontoitem(withidentifier:proposinginitialtimingbasedon:">View on Apple Developer</a>)*</span>
