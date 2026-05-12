---
source_path: "documentation/ARKit/arsession/capturehighresolutionframe-completion.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arsession/capturehighresolutionframe-completion"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:capturehighresolutionframecompletion:0000:0001">captureHighResolutionFrame(completion:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:capturehighresolutionframecompletion:0001:0001">**Framework**: ARKit **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:capturehighresolutionframecompletion:0002:0001">일반 주기 외부에서 고해상도 캡처 이미지를 포함하는 frame을 요청합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:capturehighresolutionframecompletion:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:capturehighresolutionframecompletion:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:capturehighresolutionframecompletion:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:capturehighresolutionframecompletion:0004:0003">Mac Catalyst 16.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func captureHighResolutionFrame() async throws -> ARFrame
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">This property returns <code>nil</code> if you’re not encoding.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">실패한 경우 completion block은 <code>nil</code>이 아닌 오류 객체를 받습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">이전의 고해상도 캡처 요청이 아직 완료되지 않았거나 시스템 캡처 파이프라인에 근본 문제가 발생한 경우 호출이 실패할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0003">각 경우에 따라 <a href="arerror/highresolutionframecaptureinprogress.md">@@TOKEN_0@@</a> 또는 <a href="arerror/highresolutionframecapturefailed.md">@@TOKEN_1@@</a>를 확인하여 실패 원인을 식별할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">ARKit은 자세 정보, 앵커, frame semantics를 포함하여 픽셀 데이터 이외의 frame 속성을 채웁니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">시스템은 frame을 completion handler에 비동기적으로 제공합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">세션 중 언제든지 이 함수를 호출할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0002">시스템은 고해상도 frame을 out-of-band로 전달하므로 <a href="arsession/currentframe.md">@@TOKEN_0@@</a> 또는 <a href="arsessiondelegate/session(_:didupdate:">@@TOKEN_1@@</a>-9v2kw.md)의 frame 인수처럼 세션이 정기 간격으로 받는 다른 frame에 영향을 주지 않습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0001">최고 해상도 캡처 이미지를 얻으려면 세션 구성에서 non-binned <a href="arconfiguration/videoformat-swift.property.md">@@TOKEN_0@@</a>을 선택하세요.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0002"><a href="arconfiguration/recommendedvideoformatforhighresolutionframecapturing.md">@@TOKEN_0@@</a>를 호출해 자신에게 가장 적합한 옵션을 선택할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0013:0001">최고 해상도의 정지 이미지를 위해서는 구성의 <a href="arconfiguration/supportedvideoformats.md">@@TOKEN_0@@</a> 중 <a href="arconfiguration/videoformat-swift.class/isrecommendedforhighresolutionframecapturing.md">@@TOKEN_1@@</a>이 <code>true</code>를 반환하는 <a href="arconfiguration/videoformat-swift.property.md">@@TOKEN_3@@</a>을 선택합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0013:0002">앱에 특정 해상도 요구 사항이 없다면, <a href="arconfiguration/recommendedvideoformatforhighresolutionframecapturing.md">@@TOKEN_0@@</a>가 반환하는 프레임워크 권장 형식을 사용할 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0014:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0015:0001"><code>completion</code>: 프레임 생성 시도 후 프레임워크가 실행하는 코드입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0016:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="arsession/currentframe.md">var currentFrame: ARFrame?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">ARKit의 해석을 포함해 활성 카메라 피드에서 캡처한 최신 정지 frame입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="arframe.md">class ARFrame</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">위치 추적 정보가 포함된 세션의 일부로 캡처된 동영상 이미지입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">*<a href="https://developer.apple.com/documentation/arkit/arsession/capturehighresolutionframe(completion:">View on Apple Developer</a>)*</span>
