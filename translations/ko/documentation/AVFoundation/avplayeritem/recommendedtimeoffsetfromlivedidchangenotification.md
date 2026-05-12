---
source_path: "documentation/AVFoundation/avplayeritem/recommendedtimeoffsetfromlivedidchangenotification.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avplayeritem/recommendedtimeoffsetfromlivedidchangenotification"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:recommendedtimeoffsetfromlivedidchangenotification:0000:0001">recommendedTimeOffsetFromLiveDidChangeNotification</span>

<span class="ko-segment" data-segment-id="seg:paragraph:recommendedtimeoffsetfromlivedidchangenotification:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:recommendedtimeoffsetfromlivedidchangenotification:0002:0001">플레이어 항목에서 실시간 시간 오프셋이 변경될 때 게시되는 알림입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:recommendedtimeoffsetfromlivedidchangenotification:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:recommendedtimeoffsetfromlivedidchangenotification:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:recommendedtimeoffsetfromlivedidchangenotification:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:recommendedtimeoffsetfromlivedidchangenotification:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:recommendedtimeoffsetfromlivedidchangenotification:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:recommendedtimeoffsetfromlivedidchangenotification:0004:0005">tvOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:recommendedtimeoffsetfromlivedidchangenotification:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:recommendedtimeoffsetfromlivedidchangenotification:0004:0007">watchOS 6.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class let recommendedTimeOffsetFromLiveDidChangeNotification: NSNotification.Name
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 형식의 알림을 관찰하도록 등록하여 <a href="avplayeritem/recommendedtimeoffsetfromlive.md">@@TOKEN_0@@</a> 속성 값 변경을 추적합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avplayeritem/didplaytoendtimenotification.md">class let didPlayToEndTimeNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">플레이어 항목이 종료 시간까지 재생할 때 시스템이 게시하는 알림입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avplayeritem/failedtoplaytoendtimenotification.md">class let failedToPlayToEndTimeNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">플레이어 항목이 종료 시간까지 재생하지 못할 때 시스템이 게시하는 알림입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avplayeritem/timejumpednotification.md">class let timeJumpedNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">플레이어 항목의 시간이 불연속적으로 변경될 때 시스템이 게시하는 알림입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avplayeritem/playbackstallednotification.md">class let playbackStalledNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">플레이어 항목 미디어가 재생을 계속하기 위해 제때 도착하지 않을 때 시스템이 게시하는 알림입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avplayeritem/mediaselectiondidchangenotification.md">class let mediaSelectionDidChangeNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">미디어 선택이 변경될 때 플레이어 항목이 게시하는 알림입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avplayeritem/newaccesslogentrynotification.md">class let newAccessLogEntryNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">플레이어 항목이 액세스 로그에 새 항목을 추가할 때 시스템이 게시하는 알림입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avplayeritem/newerrorlogentrynotification.md">class let newErrorLogEntryNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">플레이어 항목이 오류 로그에 새 항목을 추가할 때 시스템이 게시하는 알림입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avplayeritem/recommendedtimeoffsetfromlivedidchangenotification">View on Apple Developer</a>*</span>
