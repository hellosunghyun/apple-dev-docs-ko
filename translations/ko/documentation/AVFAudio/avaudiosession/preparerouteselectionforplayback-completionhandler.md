---
source_path: "documentation/AVFAudio/avaudiosession/preparerouteselectionforplayback-completionhandler.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiosession/preparerouteselectionforplayback-completionhandler"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:preparerouteselectionforplaybackcompletionhandler:0000:0001">prepareRouteSelectionForPlayback(completionHandler:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:preparerouteselectionforplaybackcompletionhandler:0001:0001">**Framework**: AVFAudio **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:preparerouteselectionforplaybackcompletionhandler:0002:0001">긴 형식 비디오 재생을 위해 라우트 선택을 준비합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:preparerouteselectionforplaybackcompletionhandler:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:preparerouteselectionforplaybackcompletionhandler:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:preparerouteselectionforplaybackcompletionhandler:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:preparerouteselectionforplaybackcompletionhandler:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:preparerouteselectionforplaybackcompletionhandler:0004:0004">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func prepareRouteSelectionForPlayback() async -> (Bool, AVAudioSession.RouteSelection)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">긴 형식 비디오 콘텐츠를 재생할 때 재생이 곧 시작됨을 알리기 위해 이 메서드를 호출합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">이렇게 하면 시스템이 필요한 경우 출력 대상을 사용자에게 요청하고 필요한 라우팅을 수행할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">시스템은 오디오 세션을 긴 형식 비디오 라우트 공유 정책으로 구성한 경우에만 사용자의 라우트 선택을 요청합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">시스템이 필요한 라우팅 구성을 완료하면 완료 핸들러를 호출하며, 이때부터 재생을 시작할 수 있습니다.</span>

```swift
let session = AVAudioSession.sharedInstance()
session.prepareRouteSelectionForPlayback { shouldStartPlayback, routeSelection in
    if shouldStartPlayback {
        // Prepare and present player.
    }
}
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0011:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0001"><code>completionHandler</code>: 시스템이 재생 라우트 준비를 완료한 뒤 호출되는 완료 핸들러입니다. 시스템은 완료 핸들러에 다음 매개변수를 전달합니다. - **<code>shouldStartPlayback</code>**: 재생을 시작해야 하는지 나타내는 Boolean 값입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0002">**<code>routeSelection</code>**: 활성 재생 라우트를 나타내는 라우트 선택 값입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avaudiosession/setcategory(_:mode:policy:options:">func setCategory(AVAudioSession.Category, mode: AVAudioSession.Mode, policy: AVAudioSession.RouteSharingPolicy, options: AVAudioSession.CategoryOptions) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">세션의 카테고리, 모드, 라우트 공유 정책 및 옵션을 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avaudiosession/routeselection.md">AVAudioSession.RouteSelection</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">활성 라우트 선택을 정의하는 데 사용되는 상수입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiosession/preparerouteselectionforplayback(completionhandler:">View on Apple Developer</a>)*</span>
