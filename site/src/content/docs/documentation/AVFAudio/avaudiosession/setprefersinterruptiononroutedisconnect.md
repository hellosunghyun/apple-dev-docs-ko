---
source_path: "documentation/AVFAudio/avaudiosession/setprefersinterruptiononroutedisconnect.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiosession/setprefersinterruptiononroutedisconnect"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:setprefersinterruptiononroutedisconnect:0000:0001">setPrefersInterruptionOnRouteDisconnect(_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:setprefersinterruptiononroutedisconnect:0001:0001">**Framework**: AVFAudio **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:setprefersinterruptiononroutedisconnect:0002:0001">활성 경로가 끊길 때 오디오 세션을 인터럽트하도록 선호 설정을 지정합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:setprefersinterruptiononroutedisconnect:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:setprefersinterruptiononroutedisconnect:0004:0001">iOS 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:setprefersinterruptiononroutedisconnect:0004:0002">iPadOS 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:setprefersinterruptiononroutedisconnect:0004:0003">Mac Catalyst 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:setprefersinterruptiononroutedisconnect:0004:0004">tvOS 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:setprefersinterruptiononroutedisconnect:0004:0005">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:setprefersinterruptiononroutedisconnect:0004:0006">watchOS 10.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func setPrefersInterruptionOnRouteDisconnect(_ inValue: Bool) throws
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001"><code>앱의</code> 기본 동작은 장치가 더 이상 사용할 수 없어 경로 변경이 발생할 때 재생을 일시 중지하는 것입니다(<a href="avaudiosession/routechangereason/olddeviceunavailable.md">@@TOKEN_1@@</a>).</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">iOS 17부터 시스템은 연결 해제 이벤트로 인해 경로 변경이 발생하면 활성 Now Playing 세션을 인터럽트하지만, 다른 세션은 인터럽트하지 않습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>inValue</code>: 경로 연결이 끊길 때 인터럽트 동작을 제외하려면 <a href="https://developer.apple.com/documentation/Swift/false">@@TOKEN_1@@</a> 값을 지정합니다. 기본 동작으로 되돌리려면 <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_2@@</a>로 설정합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avaudiosession/prefersnointerruptionsfromsystemalerts.md">var prefersNoInterruptionsFromSystemAlerts: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">시스템 알림으로 세션을 인터럽트하지 않도록 하는 선호도를 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avaudiosession/setprefersnointerruptionsfromsystemalerts(_:">func setPrefersNoInterruptionsFromSystemAlerts(Bool) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">시스템 알림으로 인해 오디오 세션이 인터럽트되지 않도록 하는 선호도를 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avaudiosession/prefersinterruptiononroutedisconnect.md">var prefersInterruptionOnRouteDisconnect: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">현재 경로가 끊길 때 시스템이 오디오 세션을 인터럽트할지 여부를 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avaudiosession/interruptionnotification.md">class let interruptionNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">오디오 인터럽트가 발생할 때 시스템이 게시하는 알림입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiosession/setprefersinterruptiononroutedisconnect(_:">Apple Developer에서 보기</a>)*</span>
