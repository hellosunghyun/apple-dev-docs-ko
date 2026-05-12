---
source_path: "documentation/AVFoundation/avcapturesession/hardwarecost.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturesession/hardwarecost"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:hardwarecost:0000:0001">hardwareCost</span>

<span class="ko-segment" data-segment-id="seg:paragraph:hardwarecost:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:hardwarecost:0002:0001">세션의 사용 가능한 하드웨어 예산 중 사용 중인 비율을 나타내는 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:hardwarecost:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:hardwarecost:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:hardwarecost:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:hardwarecost:0004:0003">Mac Catalyst 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:hardwarecost:0004:0004">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var hardwareCost: Float { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 속성은 캡처 세션이 현재 사용하는 하드웨어의 비율을 나타내는 <code>0.0</code>에서 <code>1.0</code> 사이의 부동 소수점 값을 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">값이 <code>1.0</code>보다 크면 하드웨어 제약으로 인해 캡처 세션을 현재 구성에서 실행할 수 없습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">이 상태에서 세션 시작을 시도하면 런타임 오류가 발생합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">하드웨어 비용에 기여하는 요인은 다음과 같습니다:</span>

- <span class="ko-segment" data-segment-id="seg:list:discussion:0010:0001">소스 디바이스의 활성 포맷입니다. 일부 포맷은 전체 센서(4:3)를 사용하고, 일부는 크롭(16:9)됩니다. 크롭 포맷은 필요한 하드웨어 대역폭이 낮아 비용이 낮아집니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0010:0002">소스 디바이스 활성 포맷의 최대 프레임 속도입니다. 높은 프레임 속도를 사용할수록 하드웨어 비용이 증가합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0010:0003">소스 디바이스가 비닝 포맷을 사용하는지 여부입니다. 비닝 포맷은 하드웨어 대역폭을 크게 덜 필요로 하므로 비용이 낮아집니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0010:0004"><a href="avcapturedepthdataoutput.md">@@TOKEN_0@@</a>을 사용해 스트리밍 시차와 깊이 정보를 전달하도록 구성된 소스 수입니다. 깊이를 생성하도록 구성된 카메라 수가 많을수록 비용이 높아집니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">하드웨어 비용을 줄이려면 센서 크롭 또는 비닝된 <a href="avcapturedevice/activeformat.md">@@TOKEN_0@@</a>을 선택하는 방안을 고려합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0002">또한 디바이스 입력의 <a href="avcapturedeviceinput/videominframedurationoverride.md">@@TOKEN_0@@</a> 속성을 사용하여 소스 디바이스의 최대 프레임 속도를 더 낮은 값으로 인위적으로 제한할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0003">이렇게 하면 사용하려는 최대 프레임 속도에 해당하는 하드웨어 비용만 적용됩니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0012:0001">**참고**: <a href="avcapturesession.md">@@TOKEN_0@@</a>은 세션에 여러 개의 <a href="avcapturevideodataoutput.md">@@TOKEN_1@@</a> 객체를 추가한 경우, 또는 <a href="avcapturemoviefileoutput.md">@@TOKEN_2@@</a> 인스턴스와 하나 이상의 <a href="avcapturevideodataoutput.md">@@TOKEN_3@@</a> 인스턴스를 함께 추가한 경우에만 0이 아닌 하드웨어 비용을 계산합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0014:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturesession/hardwarecost">View on Apple Developer</a>*</span>
