---
source_path: "documentation/AVFoundation/avcapturedevice/setwhitebalancemodelocked-withcompletionhandler.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturedevice/setwhitebalancemodelocked-withcompletionhandler"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:setwhitebalancemodelockedwithcompletionhandler:0000:0001">setWhiteBalanceModeLocked(with:completionHandler:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:setwhitebalancemodelockedwithcompletionhandler:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:setwhitebalancemodelockedwithcompletionhandler:0002:0001">지정한 화이트 밸런스 게인으로 화이트 밸런스를 잠금 모드로 설정합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:setwhitebalancemodelockedwithcompletionhandler:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:setwhitebalancemodelockedwithcompletionhandler:0004:0001">iOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:setwhitebalancemodelockedwithcompletionhandler:0004:0002">iPadOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:setwhitebalancemodelockedwithcompletionhandler:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:setwhitebalancemodelockedwithcompletionhandler:0004:0004">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func setWhiteBalanceModeLocked(with whiteBalanceGains: AVCaptureDevice.WhiteBalanceGains) async -> CMTime
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">The delegate is an object conforming to the <a href="avcapturefileoutputdelegate.md">@@TOKEN_0@@</a> protocol that will be able to monitor and control recording along exact sample boundaries.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">이 범위를 벗어난 채널 값을 설정하면 예외가 발생합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">시스템은 밝기 변화를 방지하기 위해 게인 값을 최소 채널 값으로 정규화합니다(예: <code>R:2 G:2 B:4</code>는 <code>R:1 G:1 B:2</code>로 정규화됨).</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">화이트 밸런스 게인 값을 변경하기 전에 장치 구성 속성에 대한 독점 액세스를 얻으려면 <a href="avcapturedevice/lockforconfiguration(">@@TOKEN_0@@</a>.md)을 호출해야 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">그렇지 않으면 이 프로퍼티 값을 설정할 때 예외가 발생합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0003">장치 구성을 마치면 <a href="avcapturedevice/unlockforconfiguration(">@@TOKEN_0@@</a>.md)을 호출해 잠금을 해제하고 다른 장치가 설정을 구성할 수 있도록 합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0011:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0001"><code>whiteBalanceGains</code>: 설정할 화이트 밸런스 게인입니다. 현재 화이트 밸런스를 유지하려면 <a href="avcapturedevice/currentwhitebalancegains.md">@@TOKEN_1@@</a> 값을 전달합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0002"><code>handler</code>: 화이트 밸런스 조정이 완료되고 <a href="avcapturedevice/whitebalancemode-swift.property.md">@@TOKEN_1@@</a>가 잠금 상태로 설정되면 시스템이 호출하는 콜백입니다. 이 메서드를 여러 번 호출하면 시스템이 완료 핸들러를 FIFO 순서로 호출합니다. 시스템은 모든 설정이 적용된 첫 번째 버퍼의 시간 값과 일치하는 시간을 전달합니다. 시스템은 이 타임스탬프를 장치 클럭으로 동기화하고, <a href="avcapturevideodataoutput.md">@@TOKEN_2@@</a>를 통해 전달되는 버퍼 타임스탬프와 비교하려면 해당 타임스탬프를 <a href="avcapturesession/synchronizationclock.md">@@TOKEN_3@@</a>로 변환해야 합니다. 이 정보가 필요 없다면 이 매개변수에 <code>nil</code>을 전달할 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0013:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:white-balance-constants:0014:0001">화이트 밸런스 상수</span>

- <span class="ko-segment" data-segment-id="seg:list:white-balance-constants:0015:0001"><a href="avcapturedevice/currentwhitebalancegains.md">class let currentWhiteBalanceGains: AVCaptureDevice.WhiteBalanceGains</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:white-balance-constants:0016:0001">현재 화이트 밸런스 설정을 나타내는 특수 상수입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0017:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avcapturedevice/islockingwhitebalancewithcustomdevicegainssupported.md">var isLockingWhiteBalanceWithCustomDeviceGainsSupported: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">기기가 특정 게인 값으로 화이트 밸런스 잠금을 지원하는지 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avcapturedevice/setwhitebalancemodelocked(whitebalancetemperatureandtintvalues:handler:">func setWhiteBalanceModeLocked(whiteBalanceTemperatureAndTintValues: AVCaptureDevice.WhiteBalanceTemperatureAndTintValues, handler: ((CMTime) -&gt; Void)?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">특정 온도 및 틴트 값으로 화이트 밸런스를 잠금 모드로 설정합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedevice/setwhitebalancemodelocked(with:completionhandler:">View on Apple Developer</a>)*</span>
