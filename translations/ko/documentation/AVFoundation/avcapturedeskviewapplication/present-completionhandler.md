---
source_path: "documentation/AVFoundation/avcapturedeskviewapplication/present-completionhandler.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturedeskviewapplication/present-completionhandler"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:presentcompletionhandler:0000:0001">present(completionHandler:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:presentcompletionhandler:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:presentcompletionhandler:0002:0001">추가 구성을 지정하지 않고 Desk View를 시작한 다음, 지정한 경우 완료 핸들러를 실행합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:presentcompletionhandler:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:presentcompletionhandler:0004:0001">Mac Catalyst 16.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:presentcompletionhandler:0004:0002">macOS 13.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func present() async throws
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">Desk View 앱이 이미 실행 중이면 이 메서드는 이를 전면으로 가져옵니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">Desk View가 Dock에 있는 경우 이 메서드는 앱을 열고 전면으로 가져옵니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">Desk View는 설정 모드로 실행됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">이 모드는 초광각 카메라의 전체 시야를 표시하고, 표시할 잘린 데스크 영역을 가리키는 사다리꼴 오버레이를 겹쳐서 보여줍니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0003">사용자가 설정을 완료하고 Desk View를 시작하면 시스템이 이 영역을 표시합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0010:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0001"><code>completionHandler</code>: 시스템이 Desk View를 표시한 후 실행할 코드입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0012:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avcapturedeskviewapplication/present(launchconfiguration:completionhandler:">func present(launchConfiguration: AVCaptureDeskViewApplication.LaunchConfiguration, completionHandler: (((any Error)?) -&gt; Void)?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">지정한 구성과 completion handler로 Desk View를 실행합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="avcapturedeskviewapplication/launchconfiguration.md">AVCaptureDeskViewApplication.LaunchConfiguration</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">Desk View 표시 방법을 구성하는 객체입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedeskviewapplication/present(completionhandler:">View on Apple Developer</a>)*</span>
