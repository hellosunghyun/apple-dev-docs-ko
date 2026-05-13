---
source_path: "documentation/Accelerate/quadrature/integrator/adaptive-pointsperintervalmaxintervals.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/quadrature/integrator/adaptive-pointsperintervalmaxintervals"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:adaptivepointsperintervalmaxintervals:0000:0001">adaptive(pointsPerInterval:maxIntervals:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:adaptivepointsperintervalmaxintervals:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:adaptivepointsperintervalmaxintervals:0002:0001">전역 적응형 적분기입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:adaptivepointsperintervalmaxintervals:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:adaptivepointsperintervalmaxintervals:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:adaptivepointsperintervalmaxintervals:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:adaptivepointsperintervalmaxintervals:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:adaptivepointsperintervalmaxintervals:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:adaptivepointsperintervalmaxintervals:0004:0005">tvOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:adaptivepointsperintervalmaxintervals:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:adaptivepointsperintervalmaxintervals:0004:0007">watchOS 6.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static func adaptive(pointsPerInterval: Quadrature.QAGPointsPerInterval, maxIntervals: Int) -> Quadrature.Integrator
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="quadrature/integrator/qng.md">Quadrature.Integrator.qng</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">Gauss-Kronrod-Patterson 적분 계수를 사용하는 비적응형 자동 적분기입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="quadrature/integrator/nonadaptive.md">static let nonAdaptive: Quadrature.Integrator</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">Gauss-Kronrod-Patterson 적분 계수를 사용하는 비적응형 자동 적분기입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="quadrature/integrator/qag(pointsperinterval:maxintervals:">case qag(pointsPerInterval: Quadrature.QAGPointsPerInterval, maxIntervals: Int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">전역 적응형 적분기입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="quadrature/integrator/qags(maxintervals:">Quadrature.Integrator.qags(maxIntervals:)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">각 하위 구간에서 21점 또는 15점 Gauss–Kronrod 적분을 기반으로 하는 전역 적응형 적분기입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="quadrature/integrator/adaptivewithsingularities(maxintervals:">static func adaptiveWithSingularities(maxIntervals: Int) -&gt; Quadrature.Integrator</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">각 하위 구간에서 21점 또는 15점 Gauss–Kronrod 적분을 기반으로 하는 전역 적응형 적분기입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/accelerate/quadrature/integrator/adaptive(pointsperinterval:maxintervals:">Apple Developer에서 보기</a>)*</span>
