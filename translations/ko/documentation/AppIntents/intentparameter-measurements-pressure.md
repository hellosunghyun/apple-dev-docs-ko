---
source_path: "documentation/AppIntents/intentparameter-measurements-pressure.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/appintents/intentparameter-measurements-pressure"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:pressure:0000:0001">Pressure</span>

<span class="ko-segment" data-segment-id="seg:paragraph:pressure:0001:0001">**프레임워크**: App Intents</span>

<span class="ko-segment" data-segment-id="seg:paragraph:pressure:0002:0001">압력 값을 포함하는 매개변수 변수의 세부 정보를 구성합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0003:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:creating-an-intent-parameter:0004:0001">인텐트 매개변수 만들기</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-an-intent-parameter:0005:0001"><a href="intentparameter/init(title:description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:">convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter&lt;Value&gt;.Pressure?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-4pnv9.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-an-intent-parameter:0006:0001">측정값의 기본 단위를 지정하는 앱 인텐트 매개변수를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-an-intent-parameter:0007:0001"><a href="intentparameter/init(title:description:defaultvalue:defaultunit:defaultunitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, defaultUnit: IntentParameter&lt;Value&gt;.Pressure?, defaultUnitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-6ufuu.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-an-intent-parameter:0008:0001">측정값의 기본 단위를 지정하는 앱 인텐트 매개변수를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-an-intent-parameter:0009:0001"><a href="intentparameter/init(title:description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:">convenience init(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter&lt;Value&gt;.Pressure, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior)</a>-15i5o.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-an-intent-parameter:0010:0001">측정값의 단위를 지정하는 앱 인텐트 매개변수를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-an-intent-parameter:0011:0001"><a href="intentparameter/init(title:description:defaultvalue:unit:unitadjustforlocale:supportsnegativenumbers:requestvaluedialog:inputconnectionbehavior:resolvers:">convenience init&lt;Spec&gt;(title: LocalizedStringResource, description: LocalizedStringResource?, defaultValue: Double?, unit: IntentParameter&lt;Value&gt;.Pressure, unitAdjustForLocale: Bool, supportsNegativeNumbers: Bool, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec)</a>-31nta.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-an-intent-parameter:0012:0001">측정값의 단위를 지정하는 앱 인텐트 매개변수를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-an-intent-parameter:0013:0001"><a href="intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:optionsprovider:">convenience init&lt;OptionsProvider&gt;(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, optionsProvider: OptionsProvider)</a>-8yymb.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-an-intent-parameter:0014:0001">선택 가능한 옵션 목록이 있는 앱 인텐트 매개변수를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-an-intent-parameter:0015:0001"><a href="intentparameter/init(title:description:requestvaluedialog:inputconnectionbehavior:resolvers:optionsprovider:">convenience init&lt;Spec, OptionsProvider&gt;(title: LocalizedStringResource, description: LocalizedStringResource?, requestValueDialog: IntentDialog?, inputConnectionBehavior: InputConnectionBehavior, resolvers: () -&gt; Spec, optionsProvider: OptionsProvider)</a>-35vja.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-an-intent-parameter:0016:0001">선택한 값을 변환할 수 있는 옵션 목록이 있는 앱 인텐트 매개변수를 생성합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:accessing-unit-details:0017:0001">단위 세부 정보 액세스</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-unit-details:0018:0001"><a href="intentparameter/unit-991uj.md">var unit: IntentParameter&lt;Value&gt;.Pressure?</a></span>
- <span class="ko-segment" data-segment-id="seg:list:accessing-unit-details:0018:0002"><a href="intentparameter/pressure.md">IntentParameter.Pressure</a></span>
- <span class="ko-segment" data-segment-id="seg:list:accessing-unit-details:0018:0003"><a href="intentparameter/defaultunit-4p4yh.md">var defaultUnit: IntentParameter&lt;Value&gt;.Pressure?</a></span>
- <span class="ko-segment" data-segment-id="seg:list:accessing-unit-details:0018:0004"><a href="intentparameter/supportsnegativenumbers-83fjo.md">var supportsNegativeNumbers: Bool?</a></span>
- <span class="ko-segment" data-segment-id="seg:list:accessing-unit-details:0018:0005"><a href="intentparameter/unitadjustforlocale-832oo.md">var unitAdjustForLocale: Bool?</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0019:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="intentparameter-measurements-acceleration.md">Acceleration</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">가속도 값이 포함된 매개변수 변수의 세부 정보를 구성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="intentparameter-measurements-angle.md">Angles</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">각도 값이 포함된 매개변수 변수의 세부 정보를 구성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="intentparameter-measurements-area.md">Area</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">면적 값이 포함된 매개변수 변수의 세부 정보를 구성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="intentparameter-measurements-concentration-mass.md">Concentration mass</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">질량 농도 값이 포함된 매개변수 변수의 세부 정보를 구성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="intentparameter-measurements-dispersion.md">Dispersion</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">분산 값이 포함된 매개변수 변수의 세부 정보를 구성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="intentparameter-measurements-duration.md">Durations</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">지속 시간 값이 포함된 매개변수 변수의 세부 정보를 구성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="intentparameter-measurements-electric-charge.md">Electric charge</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">전하 값이 포함된 매개변수 변수의 세부 정보를 구성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="intentparameter-measurements-electric-current.md">Electric current</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">전류 값이 포함된 매개변수 변수의 세부 정보를 구성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="intentparameter-measurements-electric-difference.md">Electric potential difference</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">전위 차이 값이 포함된 매개변수 변수의 세부 정보를 구성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="intentparameter-measurements-electric-resistance.md">Electric resistance</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">전기 저항 값이 포함된 매개변수 변수의 세부 정보를 구성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0040:0001"><a href="intentparameter-measurements-energy.md">Energy</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">에너지 값이 포함된 매개변수 변수의 세부 정보를 구성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0042:0001"><a href="intentparameter-measurements-frequency.md">Frequency</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0043:0001">주파수 값이 포함된 매개변수 변수의 세부 정보를 구성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0044:0001"><a href="intentparameter-measurements-fuel-efficiency.md">Fuel efficiency</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0045:0001">연비 값이 포함된 매개변수 변수의 세부 정보를 구성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0046:0001"><a href="intentparameter-measurements-illuminance.md">Illuminance</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0047:0001">조도 값이 포함된 매개변수 변수의 세부 정보를 구성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0048:0001"><a href="intentparameter-measurements-information-storage.md">Information storage</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0049:0001">정보 저장 값이 포함된 매개변수 변수의 세부 정보를 구성합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0051:0001">*<a href="https://developer.apple.com/documentation/appintents/intentparameter-measurements-pressure">View on Apple Developer</a>*</span>
