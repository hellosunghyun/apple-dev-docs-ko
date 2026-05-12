---
source_path: "documentation/AVFAudio/avaudiosession/setprefersnointerruptionsfromsystemalerts.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiosession/setprefersnointerruptionsfromsystemalerts"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:setprefersnointerruptionsfromsystemalerts:0000:0001">setPrefersNoInterruptionsFromSystemAlerts(_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:setprefersnointerruptionsfromsystemalerts:0001:0001">**Framework**: AVFAudio **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:setprefersnointerruptionsfromsystemalerts:0002:0001">시스템 경고로 오디오 세션이 중단되지 않도록 하는 기본 설정을 설정합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:setprefersnointerruptionsfromsystemalerts:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:setprefersnointerruptionsfromsystemalerts:0004:0001">iOS 14.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:setprefersnointerruptionsfromsystemalerts:0004:0002">iPadOS 14.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:setprefersnointerruptionsfromsystemalerts:0004:0003">Mac Catalyst 14.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:setprefersnointerruptionsfromsystemalerts:0004:0004">tvOS 14.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:setprefersnointerruptionsfromsystemalerts:0004:0005">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:setprefersnointerruptionsfromsystemalerts:0004:0006">watchOS 7.3+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func setPrefersNoInterruptionsFromSystemAlerts(_ inValue: Bool) throws
```

## <span class="ko-segment" data-segment-id="seg:heading:mentions:0007:0001">Mentions</span>

- <span class="ko-segment" data-segment-id="seg:list:mentions:0008:0001"><a href="handling-audio-interruptions.md">Handling audio interruptions</a></span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">iOS 14부터 사용자는 시스템이 수신 전화를 배너 방식 또는 전체 화면 방식으로 표시할지 지정하는 전역 기본 설정을 설정할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">배너 방식을 사용할 때 이 값을 <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_0@@</a>로 설정하면 수신 통화 알림이 오디오 세션을 중단하는 것을 방지하고 사용자가 전화를 수락하거나 거절할 수 있는 기회를 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0003">시스템은 사용자가 전화를 수락한 경우에만 오디오 세션을 중단합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">이 기본 설정을 활성화하면 영상 및 오디오 미디어 녹음이나 음악 성능용 앱처럼 오디오 세션을 중단하고 싶지 않은 앱의 사용자 경험을 개선할 수 있습니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0012:0001">❗ **중요**: 이 기본 설정은 기기가 전체 화면 표시 스타일을 사용하는 경우에는 효과가 없습니다. 시스템은 수신 전화를 받을 때 오디오 세션을 중단합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0013:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0001"><code>inValue</code>: 중단 기본 설정 값입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0015:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avaudiosession/prefersnointerruptionsfromsystemalerts.md">var prefersNoInterruptionsFromSystemAlerts: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">시스템 경고로 세션이 중단되지 않도록 할지 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avaudiosession/prefersinterruptiononroutedisconnect.md">var prefersInterruptionOnRouteDisconnect: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">현재 활성 경로가 분리될 때 시스템이 오디오 세션을 중단하는지 여부를 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avaudiosession/setprefersinterruptiononroutedisconnect(_:">func setPrefersInterruptionOnRouteDisconnect(Bool) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">활성 경로가 분리될 때 오디오 세션을 중단하도록 기본 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avaudiosession/interruptionnotification.md">class let interruptionNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">오디오 중단이 발생할 때 시스템이 게시하는 알림입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiosession/setprefersnointerruptionsfromsystemalerts(_:">View on Apple Developer</a>)*</span>
