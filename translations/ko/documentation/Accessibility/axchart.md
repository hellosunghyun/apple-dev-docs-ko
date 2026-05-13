---
source_path: "documentation/Accessibility/axchart.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accessibility/axchart"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:axchart:0000:0001">AXChart</span>

<span class="ko-segment" data-segment-id="seg:paragraph:axchart:0001:0001">**Framework**: Accessibility **Kind**: protocol</span>

<span class="ko-segment" data-segment-id="seg:paragraph:axchart:0002:0001">접근성 요소가 차트로 동작하는 데 필요한 최소 인터페이스를 선언하는 프로토콜입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:axchart:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:axchart:0004:0001">iOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:axchart:0004:0002">iPadOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:axchart:0004:0003">Mac Catalyst 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:axchart:0004:0004">macOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:axchart:0004:0005">tvOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:axchart:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:axchart:0004:0007">watchOS 8.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
protocol AXChart : NSObjectProtocol
```

## <span class="ko-segment" data-segment-id="seg:heading:mentions:0007:0001">Mentions</span>

- <span class="ko-segment" data-segment-id="seg:list:mentions:0008:0001"><a href="representing-chart-data-as-an-audio-graph.md">Representing chart data as an audio graph</a></span>

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0009:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0010:0001">차트를 접근성 있게 표현하려는 경우 이 프로토콜을 사용합니다. 데이터 집합의 그래픽 표현을 표시하는 뷰를 VoiceOver에서 오디오 그래프로 재생할 수 있도록 제공합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0011:0001">차트의 뷰 모델에서 <a href="axchart.md">@@TOKEN_0@@</a> 프로토콜을 채택하고, 차트의 제목, 축, 데이터 포인트, 주요 요약과 같이 차트를 오디오 인터페이스로 표현하는 데 필요한 모든 의미 정보를 포함한 <a href="axchartdescriptor.md">@@TOKEN_1@@</a>로 <a href="axchart/accessibilitychartdescriptor.md">@@TOKEN_2@@</a> 속성을 설정합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0012:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:supporting-accessibility:0013:0001">접근성 지원</span>

- <span class="ko-segment" data-segment-id="seg:list:supporting-accessibility:0014:0001"><a href="axchart/accessibilitychartdescriptor.md">var accessibilityChartDescriptor: AXChartDescriptor?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:supporting-accessibility:0015:0001">차트 디스크립터 형태의 접근 가능한 차트 또는 그래프에 대한 의미론적 설명입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:supporting-accessibility:0016:0001"><a href="axchartdescriptor.md">class AXChartDescriptor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:supporting-accessibility:0017:0001">접근 가능한 차트에 대한 모든 의미론적 정보를 포함하는 객체입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0018:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0019:0001">상속</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0020:0001"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0021:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="axchartdescriptor.md">class AXChartDescriptor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">접근 가능한 차트에 대한 모든 의미론적 정보를 포함하는 객체입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">*<a href="https://developer.apple.com/documentation/accessibility/axchart">View on Apple Developer</a>*</span>
